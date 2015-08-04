'use strict';


(function(){ 
	var module = angular.module('myApp.vehicleType', [])

<<<<<<< HEAD
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
=======
.controller('VehicleTypeCtrl', ['$scope', 'carService', '$location', function($scope, carService, $location) {
      $scope.cars = carService.getCars();
      $scope.go = function ( path ) {
        $location.path( path );
      };
}]);
>>>>>>> 56b344125b97d80c1e400fd4d444aa77ad6ae802
