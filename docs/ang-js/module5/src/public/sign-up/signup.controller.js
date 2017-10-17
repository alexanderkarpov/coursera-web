(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    // SignUpController.$inject = ['SignUpService'];
    SignUpController.$inject = ['SignUpService'];

    function SignUpController(SignUpService) {
        var controller = this;

        controller.loadMenuItem = function () {
            var shortName = controller.menuItem;
            if (shortName) {
                console.log("load menu item by short name", shortName);
                SignUpService.loadMenuItem(shortName)
                    .then(function (data) {
                        console.log("data", data);
                    })
                    .catch(function (error) {
                        console.log("error", error);
                    })

            }
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
