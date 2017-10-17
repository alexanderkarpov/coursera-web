(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    function SignUpController() {
        var controller = this;

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
