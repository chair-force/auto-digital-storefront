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
        $location.path( path );
    };
}]);