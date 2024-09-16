(function () {
	'use strict'
	angular.module('MsgApp',[])
	.controller('MsgController',MsgController)
	MsgController.$injector = ['$scope','$filter']
	function MsgController($scope,$filter) {
		$scope.name ="Benz"
		$scope.stateOfBeing = "spirit"
		$scope.cookieCost = .45
		$scope.sayMessage = function () {
			var msg = "Benz like to eat Sushiro!!!!"
			var output = $filter('uppercase')(msg)
			return output
		}
		$scope.favme = function () {
		$scope.stateOfBeing = "yourname"
	}
	}
	
})()