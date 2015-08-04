'use strict';

angular.module('myApp.vehicleModel', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vehicleModel', {
    templateUrl: 'vehicleModel/vehicleModel.html',
    controller: 'vehicleModelCtrl'
  });
}])

.controller('vehicleModelCtrl', [function() {

}]);