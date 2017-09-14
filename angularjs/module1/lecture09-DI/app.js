(function () {
    'use strict';

    angular.module('DIApp', [])
        .controller('DIController', diControllerFunction);

    function diControllerFunction($scope, $filter, $injector) {
        $scope.name = "Alexander";

        $scope.upper = function () {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };

        console.log($injector.annotate(diControllerFunction))
    }

})();