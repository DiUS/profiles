'use strict';

angular.module('profilesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.attrs = {};
    $scope.attrs.title = 'Senior Consultant, Cloud Lead';
    $scope.attrs.name = 'Charles Blaxland';
    $scope.attrs.labels = ['Java', 'Ruby', 'C++', 'Big Data', 'Mathematics', 'AWS', 'Agile and Lean', 'TDD', 'BDD'];
    $scope.attrs.highlights = ['Led the ResMed Easycare Online system architecture and provided technical development leadership for the highly successful product. Also accountable for the work done across multiple teams consisting of a total of more than 60 people which consisted of DiUS, ResMed and other third party vendors.', 'Part of the DiUS team that was awarded the global ResMed Most Valuable Supplier Innovation Award.'];

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

    $scope.addExperience = function() {
      $scope.attrs.addingExperience = true;
    };

    $scope.addNewExperience = function(newExperience) {
      $scope.attrs.highlights.push(newExperience);
      $scope.attrs.addingExperience = false;  
    };

    $scope.disableEditTitle();
    $scope.disableEditName();
    $scope.attrs.addingExperience = false;
  });
