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
    var controller = this;
    Todos.query(function (todos) {
      Users.query(function (users) {
        // Aquí intercalamos la información
        controller.todos = todos;
        controller.users = users;
      });
    });

    console.log(controller);
  });
