(function () {
    'use strict';

    angular.module('CounterApp', [])
        .controller('CounterController', CounterController);

    CounterController.$inject = ['$scope', '$timeout'];

    function CounterController($scope, $timeout) {
        $scope.onceCounter = 0;
        $scope.counter = 0;
        $scope.name = "Alexander";

        $scope.showNumbersOfWatchers = function () {
            console.log("# of Watchers", $scope.$$watchersCount);
        };

        $scope.countOnce = function () {
            $scope.onceCounter = 1;
        };

        $scope.upCounter = function () {
          $timeout(function () {
              $scope.counter++;
              console.log("Counter incremented");
          }, 3000);
        };

        // $scope.upCounter = function () {
        //     setTimeout(function () {
        //         $scope.$apply(function () {
        //             $scope.counter++;
        //             console.log("Counter incremented");
        //         });
        //
        //         // $scope.counter++;
        //         // console.log("Counter incremented");
        //         // $scope.$digest();
        //     }, 2000);
        // };

        $scope.$watch(function () {
            console.log("Digest loop fired!")
        });

        // $scope.$watch('onceCounter', function (newVal, oldVal) {
        //     console.log("onceCounter old value: ", oldVal);
        //     console.log("onceCounter new value: ", newVal);
        // });
        //
        // $scope.$watch('counter', function (newVal, oldVal) {
        //     console.log("counter old value: ", oldVal);
        //     console.log("counter new value: ", newVal);
        // });

    }

})();