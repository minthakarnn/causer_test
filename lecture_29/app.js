(function () {
	'use strict';

	angular.module('ControllerAsApp', [])
	.controller('ShoppingListController1', ShoppingListController1)
	.controller('ShoppingListController2', ShoppingListController2)
	.controller('ShoppingListDirectiveController', ShoppingListDirectiveController)
	.factory('ShoppingListFactory', ShoppingListFactory)
	.directive('shoppingList', ShoppingListDirective)
	.directive('listItem', listItem)
	.directive('listItemDescription', listItemDescription);

	// Shopping List Directive
	function ShoppingListDirective() {
		var ddo = {
			templateUrl: 'shoppingList.html',
			scope: {
				items: '<',
				title: '@'
			},
			controller: 'ShoppingListDirectiveController as list',
			bindToController: true
		};
		return ddo;
	}

	// List Item Directive
	function listItem() {
		var ddo = {
			templateUrl: 'listItem.html'
		};
		return ddo;
	}

	// List Item Description Directive
	function listItemDescription() {
		var ddo = {
			template: '{{item.quantity}} of {{item.name}}'
		};
		return ddo;
	}

	// ShoppingListDirectiveController
	function ShoppingListDirectiveController() {
		var list = this;

		list.containsCookies = function () {
			for (var i = 0; i < list.items.length; i++) {
				var name = list.items[i].name;
				if (name.toLowerCase().indexOf("cookie") !== -1) {
					return true;
				}
			}
			return false;
		};
	}

	// Controller 1
	ShoppingListController1.$inject = ['ShoppingListFactory'];
	function ShoppingListController1(ShoppingListFactory) {
		var list1 = this;

		// Use factory to create new shopping list service
		var shoppingList = ShoppingListFactory();

		list1.items = shoppingList.getItems();
		list1.itemName = "";
		list1.itemQuantity = "";

		list1.addItem = function () {
			try {
				shoppingList.addItem(list1.itemName, list1.itemQuantity);
			} catch (error) {
				list1.errorMessage = error.message;
			}
		};

		list1.removeItem = function (itemIndex) {
			shoppingList.removeItem(itemIndex);
		};
	}

	// Controller 2
	ShoppingListController2.$inject = ['ShoppingListFactory'];
	function ShoppingListController2(ShoppingListFactory) {
		var list2 = this;

		// Use factory to create new shopping list service limited to 3 items
		var shoppingList = ShoppingListFactory(3);

		list2.items = shoppingList.getItems();
		list2.itemName = "";
		list2.itemQuantity = "";

		list2.addItem = function () {
			try {
				shoppingList.addItem(list2.itemName, list2.itemQuantity);
			} catch (error) {
				list2.errorMessage = error.message;
			}
		};

		list2.removeItem = function (itemIndex) {
			shoppingList.removeItem(itemIndex);
		};
	}

	// ShoppingListService
	function ShoppingListService(maxItems) {
		var service = this;

		// List of shopping items
		var items = [];

		service.addItem = function (itemName, quantity) {
			if ((maxItems === undefined) || (items.length < maxItems)) {
				var item = {
					name: itemName,
					quantity: quantity
				};
				items.push(item);
			} else {
				throw new Error("Max items (" + maxItems + ") reached.");
			}
		};

		service.removeItem = function (itemIndex) {
			items.splice(itemIndex, 1);
		};

		service.getItems = function () {
			return items;
		};
	}

	// Factory
	function ShoppingListFactory() {
		var factory = function (maxItems) {
			return new ShoppingListService(maxItems);
		};
		return factory;
	}
})();