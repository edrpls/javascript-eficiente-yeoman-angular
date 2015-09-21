'use strict';

/**
 * @ngdoc function
 * @name propTalkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the propTalkApp
 */
angular.module('propTalkApp')
  .controller('MainCtrl', function (Todos, Users) {
    this.todos = Todos.query();
    this.users = Users.query();

    console.log(this.todos);
    console.log(this.users);
  });
