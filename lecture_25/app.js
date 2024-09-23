(function () {
	'use strict'

	angular.module('MenuCatagoriesApp', [])
	.controller('MenuCatagoriesController', MenuCatagoriesController)
	.service('MenuCatagoriesService', MenuCatagoriesService)
	.constant('ApiBasePath',"http://david-restaurant.herokuapp.com/")

	MenuCatagoriesController.$inject = ['MenuCatagoriesService']
	function MenuCatagoriesController(MenuCatagoriesService) {
		var menu = this
		var promise = MenuCatagoriesService.getMenuCategories()

		promise.then(function (response) {
			menu.categories = response.data
		})
		.catch(function (error) {
			console.log("Something went terribly wrong")
		})
		menu.logMenuItems = function (shortName) {
			var promise = MenuCatagoriesService.getMenuCategories(shortName)

			promise.then(function (response) {
				console.log(response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
		}
	}

	MenuCatagoriesService.$inject = ['$http','ApiBasePath']
	function MenuCatagoriesService($http,ApiBasePath) {
		var service = this

		service.getMenuCategories = function () {
			return $http({
				method: "GET",
				url: (ApiBasePath+"/categories.json")
			})
		}
		service.getMenuItemsForCategory = function (shortName) {
			return $http({
				method: "GET",
				url: (ApiBasePath + "/menu_items.json"),
				params: {
					category: shortName // Fixed parameter name
				}
			});
		};
	}
})();