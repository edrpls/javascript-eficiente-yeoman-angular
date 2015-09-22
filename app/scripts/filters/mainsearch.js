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
  .filter('mainSearch', function (cfpLoadingBar) {
    return function (items, users, expression, status) {
      var filteredItems = [],
          len = items.length,
          current = 0;
      function hasString(elt, users) {
        if (expression && expression.length) {
          return elt.title.indexOf(expression) > -1 || users[elt.userId] &&
              users[elt.userId].username.indexOf(expression) > -1;
        } else {
          return true;
        }
      }
      function manageProgress() {
        var progress = 0.0;
        if (current === 0) {
          cfpLoadingBar.start();
        } else {
          progress = current / len;
          cfpLoadingBar.set(progress);
        }
        current++;
        if (current >= len) {
          cfpLoadingBar.complete();
        }
      }
      angular.forEach(items, function (elt) {
        manageProgress();
        if (hasString(elt, users)) {
          if (status === null || status === undefined || elt.completed === status) {
            filteredItems.push(elt);
          }
        }
      });
      /*items.forEach(function (elt) {
        manageProgress();
        if (hasString(elt, users)) {
          if (status === null || elt.completed === status) {
            filteredItems.push(elt);
          }
        }
      });*/
      /*for (var i = 0; i < len; i++) {
        manageProgress();
        if (hasString(items[i], users)) {
          if (status === null || items[i].completed === status) {
            filteredItems.push(items[i]);
          }
        }
      }*/
      return filteredItems;
    };
  });
