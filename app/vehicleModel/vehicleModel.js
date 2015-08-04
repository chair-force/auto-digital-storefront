'use strict';

angular.module('myApp.vehicleModel', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vehicleModel', {
    templateUrl: 'vehicleModel/vehicleModel.html',
    controller: 'VehicleModelCtrl'
  });
}])

.controller('VehicleModelCtrl', [function() {

}]);