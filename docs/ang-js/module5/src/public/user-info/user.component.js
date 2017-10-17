(function () {
    'use strict';

    angular.module('public')
        .component('userData', {
            templateUrl: 'src/public/user-info/user-data.template.html',
            bindings: {
                data: '<'
            }
        });

})();
