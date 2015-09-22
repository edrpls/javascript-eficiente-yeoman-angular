'use strict';

/**
 * @ngdoc filter
 * @name propTalkApp.filter:mainSearch
 * @function
 * @description
 * # mainSearch
 * Filter in the propTalkApp.
 */
angular.module('propTalkApp')
  .filter('mainSearch', function () {
    return function (items, users, expression, status) {
      var filteredItems = [];
      function hasString(elt, users) {
        if (expression && expression.length) {
          return elt.title.indexOf(expression) > -1 || users[elt.userId] &&
              users[elt.userId].username.indexOf(expression) > -1;
        } else {
          return true;
        }
      }
      items.forEach(function (elt) {
        if (hasString(elt, users)) {
          if (status === null || elt.completed === status) {
            filteredItems.push(elt);
          }
        }
      });
      return filteredItems;
    };
  });
