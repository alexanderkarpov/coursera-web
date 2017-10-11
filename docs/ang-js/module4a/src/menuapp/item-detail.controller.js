(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemDetailController', ItemDetailController);


    ItemDetailController.$inject = ['$stateParams', 'MenuDataService', 'items'];

    function ItemDetailController($stateParams, MenuDataService, items) {
        var controller = this;
        controller.short_name = $stateParams.categoryShortName;
        controller.items = items;

    }

})();
