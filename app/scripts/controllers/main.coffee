'use strict'

angular.module('profilesApp').controller 'MainCtrl', ($scope) ->
    $scope.attrs =
      name:  'Charles Blaxland'
      title: 'Senior Consultant, Cloud Lead'
      summary: "Charles is a software engineering superstar with an excellent track record of delivering highly scalable and transactional software applications in a wide range of industries, including e-commerce, travel and medical. He has led globally distributed teams of over 60 using Agile and Lean practices.\n\nCurrently Charles is the DiUS Sydney resident DevOps guru who is innovating and breaking ground in the way we approach provisioning and deploying environments from development to production. Outside of work, he can be found scaling and climbing mountains with the same passion and enthusiasm as his professional endeavours."
      labels: [
        {skill: 'Java'}
        {skill: 'Ruby'}
        {skill: 'C++'}
        {skill: 'Big Data'}
        {skill: 'Mathematics'}
        {skill: 'AWS'}
        {skill: 'Agile and Lean'}
        {skill: 'TDD'}
        {skill: 'BDD'}
      ]
      highlights: [
        {text: 'Led the ResMed Easycare Online system architecture and provided technical development leadership for the highly successful product. Also accountable for the work done across multiple teams consisting of a total of more than 60 people which consisted of DiUS, ResMed and other third party vendors.'},
        {text: 'Part of the DiUS team that was awarded the global ResMed Most Valuable Supplier Innovation Award.'}
      ]
      experiences: [
        {title: 'DiUS @ ResMed', description: 'Led the ResMed Easycare Online system architecture and provided technical development leadership for the highly successful product. Also accountable for the work done across multiple teams consisting of a total of more than 60 people which consisted of DiUS, ResMed and other third party vendors.'},
        {title: 'DiUS @ Westfield',  description: 'blah, blah'},
        {title: 'Sabre Airline Solutions', description: 'Championed introduction of agile development practices and process into Sabre Airline Solutions.'}
      ]

    $scope.addExperience = ->
      $scope.attrs.addingExperience = true;

    $scope.addNewExperience = ->
      $scope.attrs.highlights.push({text: newExperience});
      $scope.attrs.addingExperience = false;

    $scope.attrs.addingExperience = false;

    $scope.addSkill = ->
      $scope.attrs.addingSkill = true;

    $scope.addNewSkill = (newSkill) ->
      $scope.attrs.labels.push({skill: newSkill});
      $scope.attrs.addingSkill = false;

    $scope.attrs.addingSkill = false;