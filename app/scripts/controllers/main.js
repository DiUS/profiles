'use strict';

angular.module('profilesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.attrs = {};
    $scope.attrs.title = 'Senior Consultant, Cloud Lead';
    $scope.attrs.name = 'Charles Blaxland';
    $scope.attrs.labels = [
      {skill: 'Java'},
      {skill: 'Ruby'},
      {skill: 'C++'},
      {skill: 'Big Data'},
      {skill: 'Mathematics'},
      {skill: 'AWS'},
      {skill: 'Agile and Lean'},
      {skill: 'TDD'},
      {skill: 'BDD'}];
    $scope.attrs.highlights = [
      {text: 'Led the ResMed Easycare Online system architecture and provided technical development leadership for the highly successful product. Also accountable for the work done across multiple teams consisting of a total of more than 60 people which consisted of DiUS, ResMed and other third party vendors.'},
      {text: 'Part of the DiUS team that was awarded the global ResMed Most Valuable Supplier Innovation Award.'}
    ];
    $scope.attrs.experiences = [
      {text: 'Sensis'},
      {text: 'Real Estate Australia'},
      {text: 'Westfield'}
    ];

    $scope.addExperience = function() {
      $scope.attrs.addingExperience = true;
    };

    $scope.addNewExperience = function(newExperience) {
      $scope.attrs.highlights.push({text: newExperience});
      $scope.attrs.addingExperience = false;
    };

    $scope.attrs.addingExperience = false;

    $scope.addSkill = function() {
      $scope.attrs.addingSkill = true;
    };

    $scope.addNewSkill = function(newSkill) {
      $scope.attrs.labels.push({skill: newSkill});
      $scope.attrs.addingSkill = false;
    };

    $scope.attrs.addingSkill = false;
  });
