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

    $scope.sedans = [[$scope.cars.types[0].sedans[0], $scope.cars.types[0].sedans[1]],[$scope.cars.types[0].sedans[2],$scope.cars.types[0].sedans[3]]];
    $scope.suvs = [[$scope.cars.types[1].suvs[0], $scope.cars.types[1].suvs[1]],[$scope.cars.types[1].suvs[2],$scope.cars.types[1].suvs[3]]];
    $scope.coupes = [[$scope.cars.types[2].coupes[0], $scope.cars.types[2].coupes[1]],[$scope.cars.types[2].coupes[2],$scope.cars.types[2].coupes[3]]];
    $scope.convertibles = [[$scope.cars.types[3].convertibles[0], $scope.cars.types[3].convertibles[1]],[$scope.cars.types[3].convertibles[2],$scope.cars.types[3].convertibles[3]]];
    $scope.getCarType = function() {
        if (carService.car == "sedans") {
            return $scope.sedans;
        } else if (carService.car == "suvs") {
            return $scope.suvs;
        } else if (carService.car == "coupes") {
            return $scope.coupes;
        } else if (carService.car == "convertibles") {
            return $scope.convertibles;
        }
    };
}]);