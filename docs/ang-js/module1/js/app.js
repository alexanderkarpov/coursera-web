(function () {
    'use strict';

    angular
        .module('LunchCheck', [])
        .controller('LunchCheckController', lunchCheckControllerFunction);

    lunchCheckControllerFunction.$inject = ['$scope'];

    function lunchCheckControllerFunction($scope) {
        $scope.checkMenu = function () {
            $scope.resultMessage = checkItems($scope.lunchMenuItems || "");
        }
    }

    function checkItems(lunchMenuItems) {
        if (lunchMenuItems) {
            var items = lunchMenuItems.split(',').filter(function (w) {
                return w.trim();
            });
            console.log("items: " + items + " (total " + items.length + ")")
            return (items.length < 4 ? "Enjoy!" : "Too much!");
        } else {
            return "Please enter data first";
        }
    }
})();