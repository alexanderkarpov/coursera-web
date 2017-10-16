(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://arcane-garden-29643.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
