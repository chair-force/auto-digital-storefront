'use strict';

angular.module('myApp.welcome', ['myApp.services'])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welcome', {
    templateUrl: 'welcome/welcome.html',
    controller: 'WelcomeCtrl'
  });
}])

.controller('WelcomeCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.go = function ( path ) {
    	//localStorage.setItem("lastname", "Smith");
        $location.path( path );


    };

    $scope.audio = function() {
        var flag = new Boolean(false);
        var audio = document.getElementById("audio");
        audio.load();
        audio.play();
        if(audio.addEventListener("ended", null)){
            flag = true;
        }

        if(flag == true){
            $scope.go('/vehicleType');
        }

    };

}]);

