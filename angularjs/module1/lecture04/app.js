(function () {
    'use strict';

    angular.module('myFirstApp', [])
        .controller('MyFirstController', function ($scope) {
            $scope.name = "Alexander";
            $scope.sayHello = function () {
                return "Hello, Coursera";
            }
        });

})();