(function () {
    'use strict';

    angular.module('MenuApp')
        .service('MenuDataService', MenuDataService);


    MenuDataService.$inject = ['$q', '$http'];

    function MenuDataService($q, $http) {
        var service = this;

        service.getAllCategories = function () {
            var deferred = $q.defer();
            var promise = $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/categories.json")
            });
            promise.then(function (response) {
                deferred.resolve(response.data)
            }).catch(function (error) {
                console.log("Something went terribly wrong.", error);
            });
            return deferred.promise;
        };

        service.getItemsForCategory = function (categoryShortName) {
            var deferred = $q.defer();
            deferred.resolve(categoryShortName);
            return deferred.promise;
        };
    }


})();
