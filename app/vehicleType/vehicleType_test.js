'use strict';

describe('myApp.vehicleType module', function() {

	beforeEach(module('myApp.vehicleType'));

	describe('vehicleType controller', function(){

		it('should ....', inject(function($controller) {
      //spec body
      var vehicleTypeCtrl = $controller('VehicleTypeCtrl');
      expect(vehicleTypeCtrl).toBeDefined();
  }));

	});
});

(function(){

	var module = angular.module('vehicleTypeView', []);

	var slideController = function($scope){
		$scope.myInterval = 5000;
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
	};

	module.controller("slideController", slideController);


}());
