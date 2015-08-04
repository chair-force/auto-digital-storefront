'use strict';

angular.module('myApp.navigation', [])
    .controller('NavigationCtrl', ['$scope', '$location', function($scope, $location) {
        $scope.hideNav = function () {
            return $location.path() === '/welcome';
        };

    }]);