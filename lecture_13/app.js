(function () {
	'use strict'
	angular.module('MsgApp',[])
	.controller('MsgController',MsgController)
	.filter('loves',LovesFilter)
	.filter('truth',TruthFilter)
	MsgController.$injector = ['$scope','lovesFilter']
	function MsgController($scope,lovesFilter) {
		$scope.name ="Benz"
		$scope.stateOfBeing = "spirit"
		$scope.cookieCost = .45
		$scope.sayMessage = function () {
			var msg = "Benz like to eat Sushiro!!!!"
			return msg
		}
		$scope.sayLovesMessage = function () {
			var msg = "Benz like to eat Sushiro!!!!"
			msg = lovesFilter(msg)
			return msg
		}
		$scope.favme = function () {
		$scope.stateOfBeing = "yourname"
	}
	}
	function LovesFilter() {
		return function (input) {
			input = input || ""
			input = input.replace("likes","loves")
			return input
		}
	}
	function TruthFilter() {
		return function (input,target,replace) {
			input = input || ""
			input = input.replace(target,replace)
			return input
		}
	}
	
})()