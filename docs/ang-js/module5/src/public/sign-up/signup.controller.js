(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    function SignUpController() {
        var controller = this;

        controller.submit = function () {
            console.log("submitted");
        }
    }

})();
