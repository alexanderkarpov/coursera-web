(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    // SignUpController.$inject = ['SignUpService'];

    function SignUpController() {
        var controller = this;

        controller.loadMenuItem = function () {
            console.log("load menu item", controller.menuItem)
        };

        controller.submit = function () {
            var signupData = {};
            signupData.firstName = controller.firstName;
            signupData.lastName = controller.lastName;
            signupData.email = controller.email;
            signupData.phone = controller.phone;
            signupData.menuItem = controller.menuItem;

            console.log("signupData", signupData);
        }
    }

})();
