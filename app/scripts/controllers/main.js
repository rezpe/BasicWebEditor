'use strict';

/**
 * @ngdoc function
 * @name skinEditorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the skinEditorApp
 */

var app = angular.module('basicEditorApp')

app.controller('MainCtrl', function($scope, localStorageService, $routeParams, History) {

    //We put everything in a dedicated onject ot give support for undo operations
    $scope.values = {}

    //Getting the name of the file to change
    $scope.name = $routeParams.objectId;
    $scope.values.text = "";

    //Save 
    $scope.save = function() {

        var Tosave = $scope.values;
        localStorageService.set($scope.name, Tosave);

    }

    $scope.saveAsFile = function(name) {

            var loaded = $scope.values

            var blob = new Blob([JSON.stringify(loaded)], {
                type: "text/plain;charset=utf-8"
            });

            saveAs(blob, $scope.name + ".json");

        }

    //Reset
    $scope.load = function() {
        var loaded = localStorageService.get($scope.name)
        $scope.values.text = loaded.text;
    }

    var w = History.watch('values', $scope)

    //Undo
    $scope.undo = function (){
        History.undo('values', $scope);
    }

    //Redo
    $scope.redo = function (){
        History.redo('values', $scope);
    }

    //Load from the localStorage
    $scope.load();

    //autosave
    $scope.$watch(function() { 
        $scope.save()
    });

});

