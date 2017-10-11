(function () {
'use strict';

angular.module('ShoppingList')
.component('shoppingList', {
  templateUrl: 'src/menuapp/templates/shoppinglist.template.html',
  bindings: {
    items: '<'
  }
});

})();
