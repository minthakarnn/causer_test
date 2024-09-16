(function () {
	'use strict'
	angular.module('MsgApp',[])
	.controller('MsgController',MsgController)
	MsgController.$injector = ['$scope']
	function MsgController($scope) {
		$scope.name ="Benz"
		$scope.stateOfBeing = "spirit"
		$scope.sayMessage = function () {
			return "Benz like to eat Sushiro!!!!"
		}
		$scope.favme = function () {
		$scope.stateOfBeing = "yourname"
	}
	}
	
})()