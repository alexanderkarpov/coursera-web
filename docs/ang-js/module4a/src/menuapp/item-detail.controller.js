(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemDetailController', ItemDetailController);


    ItemDetailController.$inject = ['$stateParams', 'categories'];

    function ItemDetailController($stateParams, categories) {
        var itemDetail = this;
        var item = categories[$stateParams.itemId];
        itemDetail.id = $stateParams.itemId;
        itemDetail.short_name = item.short_name;
    }

})();
