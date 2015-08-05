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

    $scope.getCarType = function() {
        if (carService.car == "sedans") {
            return $scope.cars.types[0].sedans;
        } else if (carService.car == "suvs") {
            return $scope.cars.types[1].suvs;
        } else if (carService.car == "coupes") {
            return $scope.cars.types[2].coupes;
        } else if (carService.car == "convertibles") {
            return $scope.cars.types[3].convertibles;
        }
    };
}]);