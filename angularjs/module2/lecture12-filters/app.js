(function () {
    'use strict';

    angular.module('MsgApp', [])
        .controller('MsgController', MsgController )
        //STEP 2: register filter factory
        .filter('loves', LovesFilter)
        .filter('truth', TruthFilter);

    MsgController.$inject = ['$scope', '$filter', 'lovesFilter']; //STEP3: inject filter factory
    function MsgController($scope, $filter, lovesFilter) {
        $scope.name = "Yaakov";
        $scope.stateOfBeing = "hungry";
        $scope.cookieCost = 0.45;

        $scope.sayMessage = function () {
            var msg = "Yaakov likes to eat healthy snacks at night";
            // var output = $filter('uppercase')(msg);
            var output = lovesFilter(msg);
            return output;
        };

        $scope.feedYaakov = function () {
            $scope.stateOfBeing = "fed";
        }
    }

    //STEP 1: create filter factory
    function LovesFilter() {
        return function (input) {
            input = input || "";
            return input.replace("likes", "loves");
        }
    }


    function TruthFilter() {
        return function (input, target, replace) {
            return (input || "").replace(target, replace)
        }
    }

})();