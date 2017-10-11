(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemDetailController', ItemDetailController);


    ItemDetailController.$inject = ['$stateParams', 'categories'];

    function ItemDetailController($stateParams, categories) {
        var itemDetail = this;
        var item = categories[$stateParams.itemId];
        itemDetail.name = item.name;
        itemDetail.quantity = item.quantity;
        itemDetail.description = item.description;
    }

})();
