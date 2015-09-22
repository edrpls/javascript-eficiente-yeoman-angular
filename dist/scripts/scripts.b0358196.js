"use strict";angular.module("propTalkApp",["ngAnimate","ngCookies","ngResource","ui.router","ngSanitize","ngTouch","angular-loading-bar","cfp.loadingBar"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("home",{url:"/",templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"})}]),angular.module("propTalkApp").controller("MainCtrl",["$filter","Todos","Users",function(a,b,c){var d=a("orderBy"),e=this;this.reverse=!1,this.query={},this.query.availableStatuses=[{value:!0,label:"Completa"},{value:!1,label:"Incompleta"}],this.todos=b.query(function(a){e.backup=angular.copy(a),e.order()}),this.users=c.query(),this.order=function(a){a&&(e.reverse=!e.reverse),e.todos=d(e.todos,"title",e.reverse)}}]),angular.module("propTalkApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("propTalkApp").factory("Todos",["$resource",function(a){return a("http://jsonplaceholder.typicode.com/todos/:todoId",{todoId:"@id"},{update:{method:"PUT"}})}]),angular.module("propTalkApp").directive("todo",["$filter",function(a){return{templateUrl:"views/_todo.html",restrict:"E",replace:!0,link:function(b){b.disabled=!0,b.$watchCollection("todo",function(c,d){if(c.title&&c.title!==d.title){var e=a("filter")(b.main.backup,{id:b.todo.id},!0)[0],f=b.main.backup.indexOf(e);b.main.backup[f].title=c.title}})}}}]),angular.module("propTalkApp").factory("Users",["$resource",function(a){return a("http://jsonplaceholder.typicode.com/users/:userId",{userId:"@id"},{update:{method:"PUT"}})}]),angular.module("propTalkApp").filter("mainSearch",["cfpLoadingBar",function(a){return function(b,c,d,e){function f(a,b){return d&&d.length?a.title.indexOf(d)>-1||b[a.userId]&&b[a.userId].username.indexOf(d)>-1:!0}function g(){var b=0;0===j?a.start():(b=j/i,a.set(b)),j++,j>=i&&a.complete()}var h=[],i=b.length,j=0;return angular.forEach(b,function(a){g(),f(a,c)&&(null===e||void 0===e||a.completed===e)&&h.push(a)}),h}}]),angular.module("propTalkApp").directive("searchFilters",["$filter",function(a){return{templateUrl:"views/_search-filters.html",restrict:"E",replace:!0,link:function(b){b.$watchCollection("main.query",function(c,d){c&&(c.text!==d.text||c.status!==d.status)&&(b.main.todos=a("mainSearch")(b.main.backup,b.main.users,c.text,c.status),b.main.order())})}}}]),angular.module("propTalkApp").run(["$templateCache",function(a){a.put("views/_search-filters.html",'<form class="form-inline"> <div class="form-group"> <input ng-model="main.query.text" ng-model-options="{debounce: 350}" type="text" class="form-control" placeholder="Búsqueda"> </div> <div class="form-group"> <select ng-model="main.query.status" ng-options="s.value as s.label for s in main.query.availableStatuses" class="form-control"> <option value="">Estatus</option> </select> </div> <button ng-click="main.order(true)" type="button" class="btn btn-default"> <span ng-if="!main.reverse" class="glyphicon glyphicon-sort-by-alphabet" aria-hidden="true"></span> <span ng-if="main.reverse" class="glyphicon glyphicon-sort-by-alphabet-alt" aria-hidden="true"></span> </button> </form>'),a.put("views/_todo.html",'<div class="panel-default panel" ng-click="disabled = !disabled"> <input ng-model="todo.title" ng-model-options="{debounce: 350}" type="text" value="" class="form-control" ng-disabled="disabled"> <p class="btn-lg">Usuario: {{main.users[todo.userId].username}}</p> <p class="btn-lg"> Completa: <span ng-if="todo.completed" class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span> <span ng-if="!todo.completed" class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span> </p> </div>'),a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<search-filters></search-filters> <todo ng-repeat="todo in main.todos track by todo.id"></todo>')}]);