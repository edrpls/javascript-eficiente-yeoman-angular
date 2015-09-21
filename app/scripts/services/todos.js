'use strict';

/**
 * @ngdoc service
 * @name propTalkApp.Todos
 * @description
 * # Todos
 * Factory in the propTalkApp.
 */
angular.module('propTalkApp')
  .factory('Todos', function ($resource) {
    return $resource('http://jsonplaceholder.typicode.com/todos/:todoId', {
      todoId: '@id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  });
