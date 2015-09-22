'use strict';

/**
 * @ngdoc directive
 * @name propTalkApp.directive:searchFilters
 * @description
 * # searchFilters
 */
angular.module('propTalkApp')
  .directive('searchFilters', function ($filter) {
    return {
      templateUrl: 'views/_search-filters.html',
      restrict: 'E',
      replace: true,
      link: function postLink(scope) {

        scope.$watchCollection('main.query', function (nC, oC) {
          if (nC) {
            if (nC.text !== oC.text || nC.status !== oC.status) {
              scope.main.todos = $filter('mainSearch')(scope.main.backup, scope.main.users, nC.text, nC.status);
              scope.main.order();
            }
          }
        });
      }
    };
  });
