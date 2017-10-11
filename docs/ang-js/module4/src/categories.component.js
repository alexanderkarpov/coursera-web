(function () {
    'use strict';

    angular.module('MenuApp')
        .component('allCategories', {
            templateUrl: 'src/templates/categories.template.html',
            bindings: {
                categories: '<'
            }
        });
})();
