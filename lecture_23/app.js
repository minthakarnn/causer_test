(function () {
	'use strict'

	angular.module('ShoppingListApp', [])
	.controller('ShoppingListController1', ShoppingListController1)
	.provider('ShoppingListService', ShoppingListServiceProvider)
	.config(config)

	config.$inject = ['ShoppingListServiceProvider']
	function config(ShoppingListServiceProvider) {
		ShoppingListServiceProvider.defaults.maxItems = 5
	}

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

	// ShoppingListService (Actual Service Logic)
	function ShoppingListService(maxItems) {
		var service = this
		var items = []

		// Add item logic
		service.addItem = function (itemName, quantity) {
			if ((maxItems === undefined) || (items.length < maxItems)) {
				var item = {
					name: itemName,
					quantity: quantity
				}
				items.push(item)
			} else {
				throw new Error("Max items (" + maxItems + ") reached.")
			}
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

	// Provider (To Configure the Service)
	function ShoppingListServiceProvider() {
		var provider = this

		// Default configuration
		provider.defaults = {
			maxItems: 10
		}

		// The $get method is called when the service is requested (injected)
		provider.$get = function () {
			var shoppingList = new ShoppingListService(provider.defaults.maxItems)
			return shoppingList
		}
	}
})();