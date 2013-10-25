'use strict';

angular.module('profilesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.attrs = {};
    $scope.attrs.title = 'Senior Consultant, Cloud Lead';
    $scope.attrs.name = 'Charles Blaxland';
    $scope.attrs.labels = ['Java', 'Ruby', 'C++', 'Big Data', 'Mathematics', 'AWS', 'Agile and Lean', 'TDD', 'BDD'];

    $scope.enabledEditTitle = function () {
      $scope.attrs.editingTitle = true;
    };

    $scope.disableEditTitle = function () {
      $scope.attrs.editingTitle = false;
    };

    $scope.enabledEditName = function () {
      $scope.attrs.editingName = true;
    };

    $scope.disableEditName = function () {
      $scope.attrs.editingName = false;
    };

    $scope.disableEditTitle();
    $scope.disableEditName();
  });
