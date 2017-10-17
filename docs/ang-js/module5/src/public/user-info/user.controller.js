(function () {
    'use strict';

    angular.module("public")
        .controller("UserController", UserController);

    UserController.$inject = ['SignUpService', 'userData'];

    function UserController(SignUpService, userData) {

        var controller = this;
        controller.data = userData;


    }

})();