(function () {
	'use strict'

	var shoppingList1 = ["milk","donut","cookie","chocolate","peanut butter"
		,"pepto Bismol","pepto Bismol (chocolate flavour)","pepto Bismol (cookie flavour)"]
	var shoppingList2 = [{
		name : "milk",
		quantity : "2"
	},{
		name : "donut",
		quantity : "200"
	},{
		name : "cookie",
		quantity : "300"
	},{
		name : "chocolate",
		quantity : "5"
	}
	]

	angular.module('ShoppingListApp',[])
	.controller('ShoppingListController',ShopppingListController)

	ShopppingListController.$inject = ['$scope']
	function ShopppingListController($scope) {
		$scope.shoppingList1 = shoppingList1
		$scope.shoppingList2 = shoppingList2
		$scope.addToList =function () {
		var newItem = {
			name : $scope.newItemName,
			quantity : $scope.newItemQuantity
		} 
		$scope.shoppingList2.push(newItem)
	}
}



})()