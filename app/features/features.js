'use strict';

angular.module('myApp.features', [])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/features', {
		templateUrl: 'features/features.html',
		controller: 'FeaturesCtrl'
	});
}])

.controller('FeaturesCtrl', [function() {
	

	$('.btnClick').on('click',function(){
		console.debug($(this).val());
		var oldVal = $('#callNumber').val();	
		var newVal;
		if($(this).val()=='x'){
			newVal = oldVal.substring(0, oldVal.length - 1);
		}
		else{
			newVal = oldVal+$(this).val();
		}
		$('#callNumber').val(newVal);
	});

	$('#callbtn').on('click', function(){
		alert($('#callNumber').val());
	});

//$(document).ready(function(){

	//alert(localStorage.getItem("lastname"));
//});
}]);