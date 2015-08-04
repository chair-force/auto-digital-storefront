'use strict';

angular.module('myApp.features', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/features', {
    templateUrl: 'features/features.html',
    controller: 'FeaturesCtrl'
  });
}])

.controller('FeaturesCtrl', [function() {

}]);