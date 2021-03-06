'use strict';

angular.module('myApp.features', [])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/features', {
		templateUrl: 'features/features.html',
		controller: 'FeaturesCtrl'
	});
}])

.controller('FeaturesCtrl', ["$scope", function($scope) {
	var sipphone = document.getElementById("sipphone");
    var player = document.getElementById("player");

    // These are the Credentials for the SIP endpoint
    // It is recommended that you use the
    // Application Data at the IEM prole to set these
    // Values and get them via the global.applicationData.value() API.
    var username = global.applicationData.value("sip.username", "default");
    var password = global.applicationData.value("sip.password", "default");
    var domain = global.applicationData.value("sip.domain", "default");
    var transport = global.applicationData.value("sip.transport", "default");
    var target = global.applicationData.value("sip.target", "default");
    var textToken = "d4e2c269-fcf1-4b67-b87e-6b9a26d8ceda:294402803";
    var dealerNumber = "5412308153"
    //$("#headerDiv").append('<p><marquee direction="left">2015 Audi Q3 headed for Detroit before hitting US showrooms this fall </marquee></p>');

    function sendDtmf(k){
        var validValues = "0123456789*#";
        if(validValues.indexOf(k)>=0){
            sipphone.sendDtmf(k);
        } 
    }
    function initSIP()
    {
        $('#sipphone').show();
        sipphone.start(username, password, domain, transport);
        sipphone.placingCall.connect(onPlacingCall);
        sipphone.incomingCall.connect(onIncomingCall);
        sipphone.ready.connect(onReady);
        sipphone.registered.connect(onRegistered);
        sipphone.established.connect(onEstablished);
        sipphone.ring.connect(onRing);
        sipphone.disconnected.connect(onDisconnected);
        sipphone.error.connect(onError);
    }
    function onPlacingCall()
    {
        $("#hangupBtn").show();
        $("#dtmfController").show();
    }
    function onIncomingCall()
    {
    }
    function onReady()
    {
        //alert('ready');
    }

    function onRegistered()
    {
        $("#hangupBtn").show();
        $("#dtmfController").show();
    }
    function onEstablished()
    {
        $("#hangupBtn").show();
    }
    function onRing()
    {
        //On ring
    }
    function onDisconnected()
    {
        //$("#player").css("display", "block");
        $("#sipphone").hide();
        $("#hangupBtn").hide();
        $("#dtmfController").hide();
    }
    function onError(code, explaination)
    {
        alert(explaination);
    }
    $(".btnClick").on('click', function(){
        var value = $(this).val();
        //alert(value);
        sendDtmf(value);
    })
    $("#callbtn").on('click', function(){
    	console.log($('#callNumber').val());
    	initSIP();
        sipphone.call(target);
        //sipphone.call('2025');
    });

    $('#hangupBtn').click(function(){
    	//alert('hi');
    	sipphone.hangup();
    });
    $('#modalTrigger').on('click', function(){
        $('#textNumber').val('');
    });

    $('#textbtn').on('click',function(){
        var customerCar = "Audi R8";
        var number = $('#textNumber').val();
        //alert('1'+number);
        //sendMail();
        var string = "http://www.audiusa.com/models/audi-r8"
        if(number.length==10){
            $.post("https://api.zipwhip.com/message/send",
            {
                body: "Thanks for checking out our Virtual Storefront, check out this link for more information on cars you liked "+ string +".",
                contacts: '1'+number,
                session: textToken
            },
            function(data, status){
                if(data.success){
                    $('#textNumber').val('');
                }
                else{
                    alert('Help!!!!');
                }
            });


            $.post("https://api.zipwhip.com/message/send",
            {
                body: "Customer Number: "+number + "\n cars:" + customerCar,
                contacts: '1'+dealerNumber,
                session: textToken
            },
            function(data, status){
            });
        }
        else{
        }


    });
    $('#volumeUp').on('click',function(){
        player.volume = player.volume+5;

    });
    
    $('#volumeDown').on('click',function(){
        player.volume = player.volume-5;
    });

    $('#textNumber').on("keypress", function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            e.stopPropagation();
            e.preventDefault();
            $("#textbtn").click();
        }
    });
    

    $('#modalTrigger').on('click', function(){
        $("#hangupBtn").hide();
        $('#sipphone').hide();
        $("#dtmfController").hide();
        $('#callNumber').val('');
    });

    $('#myCarousel').carousel({
        interval: 5000,
        pause: false
    });

    $scope.exteriorImages = [
        "resources/img/coupe-r8-features/exterior/coupe-r8-exterior-04.jpg",
        "resources/img/coupe-r8-features/exterior/coupe-r8-exterior-05.jpg",
        "resources/img/coupe-r8-features/exterior/coupe-r8-exterior-06.jpg",
        "resources/img/coupe-r8-features/exterior/coupe-r8-exterior-07.jpg"
    ];
    $scope.engineImages = [
        "resources/img/coupe-r8-features/engine/coupe-r8-engine-05.jpg",
        "resources/img/coupe-r8-features/engine/coupe-r8-engine-06.jpg",
        "resources/img/coupe-r8-features/engine/coupe-r8-engine-07.jpg"
    ];
    $scope.interiorImages = [
        "resources/img/coupe-r8-features/interior/coupe-r8-interior-01.jpg",
        "resources/img/coupe-r8-features/interior/coupe-r8-interior-02.jpg",
        "resources/img/coupe-r8-features/interior/coupe-r8-interior-03.jpg",
        "resources/img/coupe-r8-features/interior/coupe-r8-interior-05.jpg"
    ];
    $scope.imageOption = 'Exterior';
    $scope.setImageOption = function(newOption) {
        $scope.imageOption = newOption;
    }
    $scope.getSlides = function() {
        if ($scope.imageOption == "Exterior") {
            return $scope.exteriorImages;
        } else if ($scope.imageOption == "Interior") {
            return $scope.interiorImages;
        } else if ($scope.imageOption == "Engine") {
            return $scope.engineImages;
        };
    };
}]);