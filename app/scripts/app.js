'use strict';

/**
 * @ngdoc overview
 * @name propTalkApp
 * @description
 * # propTalkApp
 *
 * Main module of the application.
 */
angular
  .module('propTalkApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'angular-loading-bar',
    'cfp.loadingBar'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
  });
