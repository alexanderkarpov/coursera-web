(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'src/menuapp/templates/home.template.html'
            })

            .state('categoriesList', {
                url: '/categories-list',
                templateUrl: 'src/menuapp/templates/main-menuapp.template.html',
                controller: 'CategoriesController as categoriesList',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('categoriesList.itemDetail', {
                url: '/item-detail/{itemId}',
                templateUrl: 'src/menuapp/templates/item-detail.template.html',
                controller: "ItemDetailController as itemDetail"
            });

    }

})();
