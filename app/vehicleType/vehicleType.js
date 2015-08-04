'use strict';

angular.module('myApp.vehicleType', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vehicleType', {
    templateUrl: 'vehicleType/vehicleType.html',
    controller: 'VehicleTypeCtrl'
  });
}])

.controller('VehicleTypeCtrl', [function() {

}]);