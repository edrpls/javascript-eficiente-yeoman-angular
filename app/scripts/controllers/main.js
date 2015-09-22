'use strict';

/**
 * @ngdoc function
 * @name propTalkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the propTalkApp
 */
angular.module('propTalkApp')
  .controller('MainCtrl', function ($q, Todos, Users) {
    /*
    var controller = this;
    Todos.query(function (todos) {
      Users.query(function (users) {
        // Aquí intercalamos la información
        controller.todos = todos;
        controller.users = users;

        console.log(controller.users);
        console.log(controller.todos);
      });
    });
    */
    this.todos = Todos.query();
    this.users = Users.query();

    $q.all([
      this.todos.$promise,
      this.users.$promise
    ]).then(function () {
    },
    function () {
      //Aquí intercalamos la información
      console.log(this.users);
      console.log(this.todos);
    });
  });
