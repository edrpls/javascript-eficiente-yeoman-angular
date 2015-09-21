'use strict';

/**
 * @ngdoc directive
 * @name propTalkApp.directive:todo
 * @description
 * # todo
 */
angular.module('propTalkApp')
  .directive('todo', function () {
    return {
      templateUrl: 'views/_todo.html',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        console.log(scope.todo);
        //element.text('this is the todo directive');
      }
    };
  });
