(function () {
    'use strict';

    angular
        .module("ShoppingListCheckOffApp", [])
        .controller("ToBuyListController", ToBuyListController)
        .controller("AlreadyBoughtListController", AlreadyBoughtListController)
        .service("ToBuyListService", ToBuyListService)
        .service("AlreadyBoughtListService", AlreadyBoughtListService);

    ToBuyListController.$inject = ['ToBuyListService'];

    function ToBuyListController(ToBuyListService) {
        var showList = this;

        showList.items = ToBuyListService.getItems();

        showList.removeItem = function (itemIndex) {
            ToBuyListService.removeItem(itemIndex);
        };
    }

    AlreadyBoughtListController.$inject = ['AlreadyBoughtListService'];

    function AlreadyBoughtListController(AlreadyBoughtListService) {
        var showList = this;

        showList.items = AlreadyBoughtListService.getItems();
    }

    ToBuyListService.$inject = ['AlreadyBoughtListService'];

    function ToBuyListService(AlreadyBoughtListService) {
        var service = this;
        service.items = [
            {name: "cookies", quantity: "10 bags"},
            {name: "tomatoes", quantity: "1 kg"},
            {name: "potatoes", quantity: "5 kg"},
            {name: "beef", quantity: "0.7 kg"},
            {name: "bread", quantity: "1 loaf"}
        ];

        service.getItems = function () {
            return service.items;
        };

        service.removeItem = function (itemIndex) {
            var item = service.items[itemIndex];
            service.items.splice(itemIndex, 1);
            AlreadyBoughtListService.addItem(item);
        };


    }

    function AlreadyBoughtListService() {
        var service = this;
        service.items = [];

        service.addItem = function (item) {
            service.items.push(item);
        };

        service.getItems = function () {
            return service.items;
        };
    }

})();