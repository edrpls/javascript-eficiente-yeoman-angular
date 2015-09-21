'use strict';

/**
 * @ngdoc service
 * @name propTalkApp.Users
 * @description
 * # Users
 * Factory in the propTalkApp.
 */
angular.module('propTalkApp')
  .factory('Users', function ($resource) {
    return $resource('http://jsonplaceholder.typicode.com/users/:userId', {
      userId: '@id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  });
