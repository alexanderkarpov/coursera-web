(function () {
    'use strict';

    angular.module("NarrowItDownApp", [])
        .controller("NarrowItDownController", NarrowItDownController)
        .service("MenuSearchService", MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('ApiUrl', "https://davids-restaurant.herokuapp.com/menu_items.json")

        .controller('ShoppingListController', ShoppingListController)
        // .factory('ShoppingListFactory', ShoppingListFactory)
        .service('ShoppingListService', ShoppingListService)
        .directive('shoppingList', ShoppingListDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    MenuSearchService.$inject = ['$q', '$http', 'ApiUrl'];


    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                myTitle: '@title',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }

    function NarrowItDownController(MenuSearchService) {
        var controller = this;

        controller.title = "found items";
        controller.searchTerm = "";
        controller.found = [];

        controller.getMatchedMenuItems = function () {
            var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);

            promise.then(function (response) {
                controller.found = response;
                console.log("found", response);
            }).catch(function (error) {
                console.log("Something went terribly wrong.", error);
            });
        };

        controller.removeItem = function (index) {
            console.log("remove", index);
            controller.found.splice(index, 1);
        };

        controller.listIsEmpty = function () {
            return controller.found.length === 0;
        };
    }

    function MenuSearchService($q, $http, ApiUrl) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            var deferred = $q.defer();
            var term = searchTerm.toLowerCase();
            getMenuItemsPromise().then(function (response) {
                var res = response.data.menu_items
                    .filter(function (item) {
                        return item.description.toLowerCase().includes(term);
                    })
                    .map(function (item) {
                        return {
                            short_name: item.short_name,
                            name: item.name,
                            description: item.description
                        };
                    });

                deferred.resolve(res);
            }).catch(function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };

        var getMenuItemsPromise = function () {
            return $http({
                method: "GET",
                url: (ApiUrl)
            });
        };
    }

    //----------------------------

    function ShoppingListDirective() {
        var ddo = {
            templateUrl: 'shoppingList.html',
            scope: {
                items: '<',
                title: '@',
                badRemove: '=',
                onRemove: '&' //reference binding
            },
            // controller: 'ShoppingListDirectiveController as list',
            controller: ShoppingListDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }


    function ShoppingListDirectiveController() {
        var list = this;

        list.cookiesInList = function () {
            for (var i = 0; i < list.items.length; i++) {
                var name = list.items[i].name;
                if (name.toLowerCase().indexOf("cookie") !== -1) {
                    return true;
                }
            }

            return false;
        };
    }


    ShoppingListController.$inject = ['ShoppingListService'];

    function ShoppingListController(ShoppingListService) {
        var list = this;

        // Use factory to create new shopping list service
        var shoppingList = ShoppingListService;

        list.items = shoppingList.getItems();
        var origTitle = "Shopping List #1";
        list.title = origTitle + " (" + list.items.length + " items )";

        list.itemName = "";
        list.itemQuantity = "";

        list.addItem = function () {
            console.log("add", list.itemName);
            shoppingList.addItem(list.itemName, list.itemQuantity);
            list.title = origTitle + " (" + list.items.length + " items )";
        };

        list.removeItem = function (itemIndex) {
            console.log("'this' is: ", this);
            this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
            shoppingList.removeItem(itemIndex);
            list.title = origTitle + " (" + list.items.length + " items )";
        };
    }


// If not specified, maxItems assumed unlimited
    function ShoppingListService() {
        var service = this;

        // List of shopping items
        var items = [];

        service.addItem = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            items.push(item);
        };

        service.removeItem = function (itemIndex) {
            items.splice(itemIndex, 1);
        };

        service.getItems = function () {
            return items;
        };
    }

})();