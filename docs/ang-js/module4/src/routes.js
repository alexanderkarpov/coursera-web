(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'src/templates/home.template.html'
            })

            .state('categoriesList', {
                url: '/categories-list',
                templateUrl: 'src/templates/categories.template.html',
                controller: 'CategoriesController as categoriesList',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return [];//MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('categoriesList.items', {
                url: '/categories-list/{categoryShortName}',
                templateUrl: 'src/templates/items.template.html'
                // controller: "ItemDetailController as itemDetail"
            });

    }

})();
