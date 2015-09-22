'use strict';

/**
 * @ngdoc function
 * @name propTalkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the propTalkApp
 */
angular.module('propTalkApp')
  .controller('MainCtrl', function ($filter, Todos, Users) {
    var orderBy = $filter('orderBy'),
        controller = this;

    this.reverse = false;
    this.query = {};
    this.query.availableStatuses = [
      {value: true, label: 'Completa'},
      {value: false, label: 'Incompleta'},
    ];

    /* The Angular Way */
    this.todos = Todos.query(function (todos) {
      controller.backup = angular.copy(todos);
      controller.order();
    });
    this.users = Users.query();

    this.order = function (reverse) {
      if (reverse) {
        controller.reverse = !controller.reverse;
      }
      controller.todos = orderBy(controller.todos, 'title', controller.reverse);
    };

    /* Callbacks
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
    /* Promesas
    var controller = this;
    this.todos = Todos.query();
    this.users = Users.query();

    $q.all([
      this.todos.$promise,
      this.users.$promise
    ]).then(function () {//Todo salió bien
      //console.log(controller.users);
      //console.log(controller.todos);
      controller.todos.forEach(crossUsers);
    },
    function (err) {//Aquí manejamos los errores
      console.log(err);
    });

    function crossUsers(elt) {
      var user = controller.users[elt.userId];
      elt.userId = undefined;
      elt.user = user;
    }*/
  });
