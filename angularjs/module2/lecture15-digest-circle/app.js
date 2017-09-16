(function () {
    'use strict';

    angular.module('CounterApp', [])
        .controller('CounterController', CounterController);

    CounterController.$inject = ['$scope'];

    function CounterController($scope) {
        $scope.onceCounter = 0;
        // $scope.counter = 0;

        $scope.showNumbersOfWatchers = function () {
            console.log("# of Watchers", $scope.$$watchersCount);
        };

        $scope.countOnce = function () {
            $scope.onceCounter = 1;
        };

        $scope.upCounter = function () {
            $scope.counter = ($scope.counter | 0) + 1;
        };

        $scope.$watch('onceCounter', function (newVal, oldVal) {
            console.log("onceCounter old value: ", oldVal);
            console.log("onceCounter new value: ", newVal);
        });

        $scope.$watch('counter', function (newVal, oldVal) {
            console.log("counter old value: ", oldVal);
            console.log("counter new value: ", newVal);
        });

    }

})();