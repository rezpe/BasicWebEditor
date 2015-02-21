'use strict';

/**
 * @ngdoc function
 * @name skinEditorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the skinEditorApp
 */

var app = angular.module('basicEditorApp')

'use strict';

/**
 * @ngdoc function
 * @name basicEditorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the skinEditorApp
 */
var app = angular.module('basicEditorApp')

app.controller('PreviewCtrl', function($scope, localStorageService, $routeParams) {

    $scope.name = $routeParams.objectId;

    //Load from the localstore
    var loaded = localStorageService.get($scope.name)
    $scope.text = loaded.text;

});