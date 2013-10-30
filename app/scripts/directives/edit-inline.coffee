'use strict'

angular.module('profilesApp').directive 'editInline', ($compile, $parse, $timeout) ->
  restrict:   'A'
  scope: 
    editInline: '='
  link: ($scope, element, attrs) ->
    # Initially, we're not editing.
    $scope.editing = false

    # Get the textarea element
    textarea = angular.element element.children()[1]

    # Auto increase the width?
    if attrs.editIncreaseWidth != undefined
      textarea.attr 'auto-grow', ''
      $compile(textarea)($scope)

    # Allow enter?
    if attrs.allowEnter == undefined
      textarea.attr 'ng-enter', 'editing = false'
      $compile(textarea)($scope)

    # Handle edit complete?
    if attrs.editComplete != undefined
      $scope.$watch 'editing', ->
        if $scope.editing == false
          $scope.$eval -> $parse(attrs.editComplete)($scope.$parent)

    # Replace line breaks with <br/>
    $scope.$watch 'editInline', ->
      $scope.textAsHtml = $scope.editInline.replace /\n/g, '<br/>'

    # Default styles
    textarea.css
      background: 'transparent'
      margin:     '0'
      padding:    '0'
      border:     '0'

    # in edit mode
    $scope.edit = ->
      # Inherit styles from element
      textarea.css
        fontSize:   element.css('fontSize')
        fontFamily: element.css('fontFamily')
        fontWeight: element.css('fontWeight')
        color:      element.css('color')
        lineHeight: element.css('lineHeight')
        textAlign:  element.css('textAlign')
        width:      element.width()
        height:     element.height()

      # start editing
      $scope.editing = true

      # focus and select
      $timeout ->
        textarea[0].focus()
        textarea[0].select()
      , 50
  template: '<span ng-bind-html="textAsHtml" ng-hide="editing" ng-click="edit()" />
             <textarea ng-model="editInline" ng-show="editing" ng-blur="editing = false" />'