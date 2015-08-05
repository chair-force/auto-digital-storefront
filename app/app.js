'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.navigation',
  'myApp.welcome',
  'myApp.vehicleType',
  'myApp.vehicleModel',
  'myApp.features',
  'myApp.version',
  'ui.bootstrap',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/welcome'});
}]);
