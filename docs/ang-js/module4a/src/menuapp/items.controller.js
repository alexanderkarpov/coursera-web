(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);


    ItemsController.$inject = ['$stateParams', 'MenuDataService', 'items'];

    function ItemsController($stateParams, MenuDataService, items) {
        var controller = this;
        controller.short_name = $stateParams.categoryShortName;
        controller.items = items;

    }

})();
