(function () {
    'use strict';

    angular.module('NameCalculator', [])
        .controller('NameCalculatorController', function ($scope) {
           $scope.name = "";
           $scope.totalValue = 0;
           $scope.displayNumeric = function () {
               $scope.totalValue = calculateNumericForString($scope.name);
           };

           function calculateNumericForString(str) {
               var totalStringValue = 0;
               for(var i = 0; i < str.length; i++) {
                   totalStringValue += str.charCodeAt(i);
               }
               return totalStringValue;
           }
        });
})();