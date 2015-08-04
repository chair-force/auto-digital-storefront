'use strict';

angular.module('myApp.vehicleType', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vehicleType', {
    templateUrl: 'vehicleType/vehicleType.html',
    controller: 'VehicleTypeCtrl'
  });
}])

.controller('VehicleTypeCtrl', ['$scope', 'carService', '$location', function($scope, carService, $location) {
      $scope.cars = carService.getCars();
      $scope.go = function ( path ) {
        $location.path( path );
      };
}]);