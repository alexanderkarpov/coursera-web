(function () {
    "use strict";

    angular.module('public')
        .service('SignUpService', SignUpService);

    SignUpService.$inject = ['$http', 'ApiPath', '$q'];

    function SignUpService($http, ApiPath, $q) {

        var service = this;
        service.userData = {};
        service.loadMenuItem = function (shortName) {
            return $http({
                method: "GET",
                url: (ApiPath + "/menu_items/" + shortName + ".json")
            }).then(function (response) {
                return response.data;
            });

        };

        //https://arcane-garden-29643.herokuapp.com/images/F3.jpg
        service.menuItemUrl = function (shortName) {
            return ApiPath + "/images/" + shortName + ".jpg";
        };

        service.saveUserData = function (data) {
            console.log("save user data", data);
            service.userData = data;
        };

        service.getUserData = function () {
            // var deferred = $q.defer();
            // deferred.resolve(new Date());
            // return deferred;
            console.log("load user data", service.userData);
            return service.userData;

            // return new Date();
        }

    }
})();