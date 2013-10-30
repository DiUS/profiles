angular.module('profilesApp').directive 'editInline', ($timeout) ->
  restrict:   'A'
  scope: 
    value: '=editInline'
  link: ($scope, element, attrs) ->
    # Get the input element
    input = angular.element element.children()[1]

    # Default styles
    input.css
      background: 'transparent'
      margin:     '-3px 0'
      padding:    '0'
      border:     '0'
      width:      'auto'

    # Inherit styles from element
    input.css
      fontSize:   element.css('fontSize')
      fontFamily: element.css('fontFamily')
      fontWeight: element.css('fontWeight')
      color:      element.css('color')
    
    # Initially, we're not editing.
    $scope.editing = false

    # in edit mode
    $scope.edit = ->
      $scope.editing = true

      # focus and select
      $timeout ->
        input[0].focus()
        input[0].select()
      , 50
  template: '<span  ng-bind="value"  ng-hide="editing" ng-click="edit()" />
             <input ng-model="value" ng-show="editing" ng-blur="editing = false" ng-enter="editing = false" />'