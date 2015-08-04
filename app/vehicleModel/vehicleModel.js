'use strict';

angular.module('myApp.vehicleModel', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vehicleModel', {
    templateUrl: 'vehicleModel/vehicleModel.html',
    controller: 'VehicleModelCtrl'
  });
}])

.controller('VehicleModelCtrl', ['$scope', 'carService', '$location', function($scope, carService, $location) {
    $scope.cars = carService.getCars();
    $scope.go = function ( path ) {
      $location.path( path );
    };
}]);