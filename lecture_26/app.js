(function () {
	'use strict'

	angular.module('ControllerAsApp', [])
	.controller('ShoppingListController1', ShoppingListController1)
	.controller('ShoppingListController2', ShoppingListController2)
	.factory('ShoppingListFactory', ShoppingListFactory)
	.directive('listItemDescription',listItemDescription)
	.directive('listItem',listItem)

	function listItem() {
		var ddo = {
			templateUrl : 'listItem.html'
		}
		return ddo
	}

	function listItemDescription() {
		var ddo = {
			template : '{{item.quantity }} of {{item.itemName}} '
		}
		return ddo
	}


	// Controller 1
	ShoppingListController1.$inject = ['ShoppingListFactory']
	function ShoppingListController1(ShoppingListFactory) {
		var list1 = this
		var shoppingList = ShoppingListFactory()

		list1.items = shoppingList.getItems()
		list1.itemName = ""
		list1.itemQuantity = ""

		list1.addItem = function () {
			// Corrected call to shoppingList object, not ShoppingListFactory
			shoppingList.addItem(list1.itemName, list1.itemQuantity)
		}
		list1.removeItem = function (itemIndex) {
			shoppingList.removeItem(itemIndex)
		}
	}

	// Controller 2
	ShoppingListController2.$inject = ['ShoppingListFactory']
	function ShoppingListController2(ShoppingListFactory) {
		var list2 = this
		var shoppingList = ShoppingListFactory(3) // limit to 3 items

		list2.items = shoppingList.getItems()
		list2.itemName = ""
		list2.itemQuantity = ""

		list2.addItem = function () {
			try {
				shoppingList.addItem(list2.itemName, list2.itemQuantity)
			} catch (error) {
				list2.errorMessage = error.message
			}
		}

		list2.removeItem = function (itemIndex) {
			shoppingList.removeItem(itemIndex)
		}
	}

	// ShoppingListService
	function ShoppingListService(maxItems) {
		var service = this
		var items = []

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

		service.removeItem = function (itemIndex) {
			items.splice(itemIndex, 1)
		}

		service.getItems = function () {
			return items
		}
	}

	// Factory
	function ShoppingListFactory() {
		var factory = function (maxItems) {
			return new ShoppingListService(maxItems)
		}
		return factory
	}
})();