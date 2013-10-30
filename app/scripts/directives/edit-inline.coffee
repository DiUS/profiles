angular.module('profilesApp').directive 'editInline', ($timeout) ->
  restrict:   'A'
  scope: 
    value: '=editInline'
  link: ($scope, element, attrs) ->
    # Get the textarea element
    textarea = angular.element element.children()[1]

    # Default styles
    textarea.css
      background: 'transparent'
      margin:     '0'
      padding:    '0'
      border:     '0'

    # Initially, we're not editing.
    $scope.editing = false

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
  template: '<span     ng-bind="value"  ng-hide="editing" ng-click="edit()" />
             <textarea ng-model="value" ng-show="editing" ng-blur="editing = false" ng-enter="editing = false" />'