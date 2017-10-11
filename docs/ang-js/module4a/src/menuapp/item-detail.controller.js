(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemDetailController', ItemDetailController);


    ItemDetailController.$inject = ['$stateParams'];

    function ItemDetailController($stateParams) {
        var itemDetail = this;
        itemDetail.short_name = $stateParams.categoryShortName;
    }

})();
