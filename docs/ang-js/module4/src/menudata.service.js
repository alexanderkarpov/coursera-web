(function () {

    'use strict';

    angular.module('MenuApp')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$q'];

    function MenuDataService($q) {
        var service = this;

        service.getAllCategories = function () {

        };

        service.getItemsForCategory = function (categoryShortName) {

        };

    }

});