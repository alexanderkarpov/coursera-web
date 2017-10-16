(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    function SignUpController() {
        var controller = this;

        controller.submit = function () {
            console.log("firstname", controller.firstname);
            console.log("lastname", controller.lastname);
            console.log("email", controller.email);
            console.log("phone", controller.phone);
            console.log("menuItem", controller.menuItem);
        }
    }

})();
