(function () {
	'use strict'

	angular.module('ShoppingListApp', [])
	.controller('ShoppingListController1', ShoppingListController1)
	.service('ShoppingListService', ShoppingListService)
	.service('WeightlossFilterService',WeightlossFilterService)

	ShoppingListController1.$inject = ['ShoppingListService']

	// Controller 1
	ShoppingListController1.$inject = ['ShoppingListService']
	function ShoppingListController1(ShoppingListService) {
		var list = this

		// Fetch initial items from the ShoppingListService
		list.items = ShoppingListService.getItems()
		list.itemName = ""
		list.itemQuantity = ""
		list.errorMessage = ""

		// Add item function
		list.addItem = function () {
			try {
				ShoppingListService.addItem(list.itemName, list.itemQuantity)
			} catch (error) {
				list.errorMessage = error.message
			}
		}

		// Remove item function
		list.removeItem = function (itemIndex) {
			ShoppingListService.removeItem(itemIndex)
		}
	}

	ShoppingListService.$inject = ['$q','WeightlossFilterService']

	// ShoppingListService (Actual Service Logic)
	function ShoppingListService($q,WeightlossFilterService) {
		var service = this
		var items = []

		// Add item logic
		service.addItem = function (itemName, quantity) {
			var promise = WeightlossFilterService.checkName(itemName)
			promise.then(function (response) {
				var nextPromise = WeightlossFilterService.checkQuantity(quantity)
				nextPromise.then(function (result) {
					var item = {
					name : itemName,
					quantity :quantity

				}
				items.push(item)
				},function (errorResponse) {
					console.log(errorResponse.message)
				})	
			},function (errorResponse) {
				console.log(errorResponse.message)
			})
			// if ((maxItems === undefined) || (items.length < maxItems)) {
			// 	var item = {
			// 		name: itemName,
			// 		quantity: quantity
			// 	}
			// 	items.push(item)
			// } else {
			// 	throw new Error("Max items (" + maxItems + ") reached.")
			// }
		}

		// Remove item logic
		service.removeItem = function (itemIndex) {
			items.splice(itemIndex, 1)
		}

		// Get items
		service.getItems = function () {
			return items
		}
	}

	WeightlossFilterService.$inject = ['$q','$timeout']
	// Provider (To Configure the Service)
	function WeightlossFilterService('$q','$timeout') {
		var service = this

		// Default configuration
		service.checkName = function (itemName) {
			var deferred = $q.defer()
			var result = {
				message : ""
			}
			$timeout(function () {
				if(name.toLowerCase(),indexOf('cookie')=== -1){
					deferred.resolve(result)
				}else{
					result.message = "Stay away from cookies,Benz"
					deferred.reject(result)
				}
			},3000)
			return deferred.promise
		}
		service.checkQuantity = function (quantity) {
			var deferred = $q.defer()
			var result = {
				message = ""
			}
			$timeout(function () {
				if(quantity < 6){
					deferred.resolve(result)
				}else{
					result.message = "That to much,Benz"
					deferred.reject(result)
				}
			},1000)
			return deferred.promise
		}
	}

})();