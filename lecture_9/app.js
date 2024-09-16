(function () {
	'use strict';	

	angular.module('DIApp',[])
	.controller('DIController',DIController)

	function DIController($scope,$filter,$injector) {
		$scope.name = "Benz"
		$scope.upCase = function () {
			var upCase = $filter('uppercase')
			$scope.name = upCase($scope.name)
		}
		console.log($injector.annotate(DIController))
	}
	function AnnonateMe(name,job,blah) {
		return "blash!"	}
	console.log(AnnonateMe.toString())
})()