'use strict';

/**
 * @ngdoc overview
 * @name BasicEditorApp
 *
 * Main module of the application.
 */

angular
  .module('basicEditorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'decipher.history'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .when('/object/:objectId', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/object/preview/:objectId', {
        templateUrl: 'views/preview.html',
        controller: 'PreviewCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// Configure the locastorage service
angular.module('basicEditorApp').config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('basicEditor');
});
