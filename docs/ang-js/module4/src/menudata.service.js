(function () {

    'use strict';

    angular.module('MenuApp')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$q'];

    function MenuDataService($q) {
        var service = this;

        service.getAllCategories = function () {
            // List of shopping items
            var items = [];

            // Pre-populate a no cookie list
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

            var deferred = $q.defer();

            // Wait 2 seconds before returning
            $timeout(function () {
                // deferred.reject(items);
                deferred.resolve(items);
            }, 800);

            return deferred.promise;


        };

        service.getItemsForCategory = function (categoryShortName) {

        };

    }

});