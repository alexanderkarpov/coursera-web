(function () {

    'use strict';

    angular.module('RoutingApp', ['ui.router']);

    angular.module('RoutingApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to tab 1 if no other URL matches
        $urlRouterProvider.otherwise('/tab1');

        // Set up UI states
        $stateProvider
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/templates/categories.html'
            })

            .state('items', {
                url: '/items',
                templateUrl: 'src/templates/items.html'
            });
    }


})();
