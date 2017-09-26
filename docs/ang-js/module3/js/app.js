(function () {
    'use strict';

    angular.module("NarrowItDownApp", [])
        .controller("NarrowItDownController", NarrowItDownController)
        .service("MenuSearchService", MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('ApiUrl', "https://davids-restaurant.herokuapp.com/menu_items.json");

    NarrowItDownController.$inject = ['MenuSearchService'];
    MenuSearchService.$inject = ['$q', '$http', 'ApiUrl'];


    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                list: '<myList'
            }
            // controller: NarrowItDownController,
            // controllerAs: 'list',
            // bindToController: true
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

})();