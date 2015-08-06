'use strict';

angular.module('myApp.features', [])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/features', {
		templateUrl: 'features/features.html',
		controller: 'FeaturesCtrl'
	});
}])

.controller('FeaturesCtrl', [function() {
	//var sipphone = document.getElementById("sipphone");

    // These are the Credentials for the SIP endpoint
    // It is recommended that you use the
    // Application Data at the IEM prole to set these
    // Values and get them via the global.applicationData.value() API.
    /*var username = global.applicationData.value("sip.username", "default");
    var password = global.applicationData.value("sip.password", "default");
    var domain = global.applicationData.value("sip.domain", "default");
    var transport = global.applicationData.value("sip.transport", "default");
    var target = global.applicationData.value("sip.target", "default");*/
    //$("#headerDiv").append('<p><marquee direction="left">2015 Audi Q3 headed for Detroit before hitting US showrooms this fall </marquee></p>');

    /*function initSIP()
    {
        alert('init');
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
    }
    function onIncomingCall()
    {
    }
    function onReady()
    {
        alert('ready');
    }

    function onRegistered()
    {
    	alert('hello');
    	sipphone.call($('#callNumber').val());
    	$("#hangupBtn").show();
    }
    function onEstablished()
    {
    }
    function onRing()
    {
    }
    function onDisconnected()
    {
    }
    function onError(code, explaination)
    {
    }
    */
    $("#callbtn").on('click', function(){
    	console.log($('#callNumber').val());
    	if($('#callNumber').val()){
    		///initSIP();
    		player.pause();
    	}
    });

    $('#hangupBtn').click(function(){
    	alert('hi');
    	sipphone.hangup();
    });
    $('.btnClick').on('click',function(){
    	console.debug($(this).val());
    	var oldVal = $('#callNumber').val();	
    	var newVal;
    	if($(this).val()=='x'){
    		newVal = oldVal.substring(0, oldVal.length - 1);
    	}
    	else{
    		newVal = oldVal+$(this).val();
    	}
    	$('#callNumber').val(newVal);
    });
    $('#modalTrigger').on('click', function(){
   	    $("#hangupBtn").hide();
    });
//$(document).ready(function(){

	//alert(localStorage.getItem("lastname"));
//});
}]);