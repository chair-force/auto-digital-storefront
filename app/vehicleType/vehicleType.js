'use strict';


(function(){ 
	var module = angular.module('myApp.vehicleType', [])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/vehicleType', {
			templateUrl: 'vehicleType/vehicleType.html',
			controller: 'VehicleTypeCtrl'
		});
	}]);

	module.controller('VehicleTypeCtrl', [function() {


	}]);

	module.controller('sedanController',["$scope",function($scope){
		$scope.myInterval = 1000;
		$scope.noWrapSlides = false;
		var slides = $scope.slides = [];
		$scope.addSlide = function() {
			var newWidth = 600 + slides.length + 1;
			slides.push({
				image: '//placekitten.com/' + newWidth + '/300',
				text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
				['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
			});
		};
		for (var i=0; i<4; i++) {
			$scope.addSlide();
		}

	}]);

}());