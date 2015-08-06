'use strict';


(function(){ 
		//localStorage.setItem("lastname", "Smith");

	var module = angular.module('myApp.vehicleType', [])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/vehicleType', {
			templateUrl: 'vehicleType/vehicleType.html',
			controller: 'VehicleTypeCtrl'
		});
	}]);

	module.controller('VehicleTypeCtrl', [function() {


	}]);

	module.controller('coupeController',["$scope", 'carService', '$location', function($scope, carService, $location){
		$scope.go = function ( path ) {
			$location.path( path );
		};
		$scope.setCarType = function (type) {
			carService.car = type;
		};
		$scope.myInterval = 3000;
		$scope.noWrapSlides = false;
		var slides = $scope.slides = [];
		var images = ["coupe-a5.jpg", "coupe-r5.jpg", "coupe-r8.jpg", "coupe-rs-5.jpg"]
		$scope.addSlide = function(i) {
			slides.push({
				image: "resources/img/"+images[i],
			});
		};
		for (var i=0; i<4; i++) {
			$scope.addSlide(i);
		}

	}]);

	module.controller('suvController',["$scope", 'carService', '$location', function($scope, carService, $location){
		$scope.go = function ( path ) {
			$location.path( path );
		};
		$scope.setCarType = function (type) {
			carService.car = type;
		};
		$scope.myInterval = 3000;
		$scope.noWrapSlides = false;
		var slides = $scope.slides = [];
		var images = ["suv-allroad.jpg", "suv-q5-hybrid.jpg", "suv-q5.jpg", "suv-q7.jpg", "suv-sq5.jpg"]
		$scope.addSlide = function(i) {
			//var newWidth = 600 + slides.length + 1;
			slides.push({
				image: "resources/img/"+images[i],
			});
		};
		for (var i=0; i<5; i++) {
			$scope.addSlide(i);
		}

	}]);
	module.controller('sedanController',["$scope", 'carService', '$location', function($scope, carService, $location){
		$scope.go = function ( path ) {
			$location.path( path );
		};
		$scope.setCarType = function (type) {
			carService.car = type;
		};
		$scope.myInterval = 3000;
		$scope.noWrapSlides = false;
		var slides = $scope.slides = [];
		var images = ["sedan-a8.jpg", "sedan-a3.jpg", "sedan-a4.jpg", "sedan-a8-l-w12.jpg", "sedan-s8.jpg"]
		$scope.addSlide = function(i) {
			//var newWidth = 600 + slides.length + 1;
			slides.push({
				image: "resources/img/"+images[i],
			});
		};
		for (var i=0; i<5; i++) {
			$scope.addSlide(i);
		}

	}]);
	module.controller('convertibleController',["$scope", 'carService', '$location', function($scope, carService, $location){
		$scope.go = function ( path ) {
			$location.path( path );
		};
		$scope.setCarType = function (type) {
			carService.car = type;
		};
		$scope.myInterval = 3000;
		$scope.noWrapSlides = false;
		var slides = $scope.slides = [];
		var images = ["convertible-a3-cabriolet.jpg", "convertible-a5-cabriolet.jpg", "convertible-r8-spyder.jpg", "convertible-rs-5-cabriolet.jpg", "convertible-s5-cabriolet.jpg"]
		$scope.addSlide = function(i) {
			//var newWidth = 600 + slides.length + 1;
			slides.push({
				image: "resources/img/"+images[i],
			});
		};
		for (var i=0; i<4; i++) {
			$scope.addSlide(i);
		}

	}]);
}());