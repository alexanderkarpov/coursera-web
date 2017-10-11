(function () {
    'use strict';

    angular.module('MenuApp')
        .service('MenuDataService', MenuDataService);


    MenuDataService.$inject = ['$q'];

    function MenuDataService($q) {
        var service = this;

        var items = [];

        items.push({
            id: 81,
            short_name: "L",
            name: "Lunch",
            special_instructions: "Sunday-Friday 11:15am-3:00pm. Served with your choice of rice " +
            "(Vegetable Fried Rice, Steamed Rice, Brown Rice), AND EITHER soup (Hot \u0026 Sour," +
            " Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to " +
            "have both soup and egg roll.",
            url:"https://davids-restaurant.herokuapp.com/categories/81.json"
        });
        service.getAllCategories = function () {
            var deferred = $q.defer();
            deferred.resolve(items);
            return deferred.promise;
        };

        service.getItemsForCategory = function (categoryShortName) {
            var deferred = $q.defer();
            deferred.resolve(categoryShortName);
            return deferred.promise;
        };
    }



})();
