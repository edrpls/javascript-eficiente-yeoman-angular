'use strict';

/**
 * @ngdoc directive
 * @name propTalkApp.directive:todo
 * @description
 * # todo
 */
angular.module('propTalkApp')
  .directive('todo', function ($filter) {
    return {
      templateUrl: 'views/_todo.html',
      restrict: 'E',
      replace: true,
      link: function postLink(scope) {
        scope.disabled = true;
        scope.$watchCollection('todo', function (nT, oT) {
          if (nT.title && nT.title !== oT.title) {
          var original = $filter('filter')(scope.main.backup, {id: scope.todo.id}, true)[0],
              index = scope.main.backup.indexOf(original);
          scope.main.backup[index].title = nT.title;
          }
        });
      }
    };
  });
