(function () {
    'use strict';

    angular.module("NarrowItDownApp", [])
        .controller("NarrowItDownController", NarrowItDownController)
        .service("MenuSearchService", MenuSearchService)
        .constant('ApiUrl', "https://davids-restaurant.herokuapp.com/menu_items.json");

    NarrowItDownController.$inject = ['MenuSearchService'];
    MenuSearchService.$inject = ['$q', '$http', 'ApiUrl'];

    function NarrowItDownController(MenuSearchService) {
        var controller = this;

        controller.getMatchedMenuItems = function () {
            var promise = MenuSearchService.getMatchedMenuItems();

            promise.then(function (response) {
                controller.found = response;
                console.log("found", response);
            }).catch(function (error) {
                console.log("Something went terribly wrong.", error);
            });
        };
    }

    function MenuSearchService($q, $http, ApiUrl) {
        var service = this;

        service.getMatchedMenuItems = function () {
            var deferred = $q.defer();

            getMenuItemsPromise().then(function (response) {
                var res = response.data.menu_items.map(function (item) {return item.name });
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