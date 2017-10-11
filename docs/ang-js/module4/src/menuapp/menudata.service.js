(function () {
    'use strict';

    angular.module('MenuApp')
        .service('MenuDataService', MenuDataService);


    MenuDataService.$inject = ['$q', '$http', '$stateParams'];

    function MenuDataService($q, $http, $stateParams) {
        var service = this;

        service.getAllCategories = function () {
            var deferred = $q.defer();
            var promise = $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/categories.json"
            });
            promise.then(function (response) {
                deferred.resolve(response.data)
            }).catch(function (error) {
                console.log("Something went terribly wrong.", error);
            });
            return deferred.promise;
        };

        service.getItemsForCategory = function (categoryShortName) {
            // var categoryShortName = $stateParams.categoryShortName;

            var deferred = $q.defer();
            if (categoryShortName) {
                var promise = $http({
                    method: "GET",
                    // url: "https://davids-restaurant.herokuapp.com/categories.json"
                    url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName
                });
                promise.then(function (response) {
                    console.log("items", response.data.menu_items);
                    deferred.resolve(response.data.menu_items)
                }).catch(function (error) {
                    console.log("Something went terribly wrong.", error);
                });

            } else {
                deferred.resolve([]);
            }

            return deferred.promise;


        };
    }


})();
