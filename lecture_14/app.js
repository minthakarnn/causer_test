(function () {
	'use strict'
	angular.module('CounterApp',[])
	.controller('CounterController',CounterController)

	CounterController.$inject = ['$scope']
	function CounterController($scope) {
		$scope.onceCounter = 0
		$scope.counter = 0
		$scope.name ="Benz"
		$scope.showNumberOfWatchers = function () {
			console.log("# of watchers: ",$scope.$$watchersCount)
		}
		$scope.countOnce = function () {
			$scope.onceCounter= 1
		}
		$scope.upCounter = function () {
			$scope.counter++
		}
		$scope.$watch(function () {
			console.log("Digit Loop Fired!")
		})
		// $scope.$watch('onceCounter',function (newValue,oldValue) {
		// 	console.log("once old value : ",oldValue)
		// 	console.log("once new value : ",newValue)
		// })
		// $scope.$watch('counter',function (newValue,oldValue) {
		// 	console.log("counter old value : ",oldValue)
		// 	console.log("counter new value : ",newValue)
		// })
	}
})()