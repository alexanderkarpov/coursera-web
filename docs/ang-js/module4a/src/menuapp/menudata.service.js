(function () {
    'use strict';

    angular.module('MenuApp')
        .service('MenuDataService', MenuDataService);


    MenuDataService.$inject = ['$q', '$http'];

    function MenuDataService($q, $http) {
        var service = this;

        service.getAllCategories = function () {
            return $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/categories.json")
            });
        };

        service.getItemsForCategory = function (categoryShortName) {
            var deferred = $q.defer();
            deferred.resolve(categoryShortName);
            return deferred.promise;
        };
    }


})();
