angular.module('profilesApp').directive( 'editInPlace', function($timeout) {
  return {
    restrict: 'A',
    transclude: true,
    scope: { value:"=editInPlace" },
    template: '<span ng-click="edit()" ng-bind="value" ng-hide="editing"></span><input ng-show="editing" ng-model="value" ng-blur="editing = false" ng-enter="editing = false"></input><span ng-transclude />',
    link: function ( $scope, element, attrs ) {
      // Let's get a reference to the input element, as we'll want to reference it.
      var inputElement = angular.element( element.children()[1] );

      // This directive should have a set class so we can style it.
      element.addClass( 'edit-in-place' );

      // Initially, we're not editing.
      $scope.editing = false;

      // ng-click handler to activate edit-in-place
      $scope.edit = function () {
        $scope.editing = true;

        // We control display through a class on the directive itself. See the CSS.
        element.addClass( 'active' );

        // And we must focus the element.
        // `angular.element()` provides a chainable array, like jQuery so to access a native DOM function,
        // we have to reference the first element in the array.
        $timeout(function () {
          inputElement[0].focus();
          inputElement[0].select();
        }, 100);
      };

      // When we leave the input, we're done editing.
      inputElement.prop( 'onblur', function() {
        $scope.editing = false;
        element.removeClass( 'active' );
      });
    }
  };
});

angular.module('profilesApp').directive( 'editInPlaceTextarea', function($timeout) {
  return {
    restrict: 'A',
    transclude: true,
    scope: { value:"=editInPlaceTextarea" },
    template: '<span ng-click="edit()" ng-bind-html="value" ng-hide="editing"></span><textarea ng-show="editing" ng-model="value"></textarea><span ng-transclude />',
    link: function ( $scope, element, attrs ) {
      // Let's get a reference to the input element, as we'll want to reference it.
      var inputElement = angular.element( element.children()[1] );

      // This directive should have a set class so we can style it.
      element.addClass( 'edit-in-place' );

      // Initially, we're not editing.
      $scope.editing = false;

      // ng-click handler to activate edit-in-place
      $scope.edit = function () {
        $scope.editing = true;

        // replace <br>'s with line breaks
        $scope.value = $scope.value.replace(/<br\/>/g, '\n');

        // We control display through a class on the directive itself. See the CSS.
        element.addClass( 'active' );

        // And we must focus the element.
        // `angular.element()` provides a chainable array, like jQuery so to access a native DOM function,
        // we have to reference the first element in the array.
        $timeout(function () {
          inputElement[0].focus(); 
          inputElement[0].select();
        }, 100);
      };

      // When we leave the input, we're done editing.
      inputElement.on('blur', function() {
        $scope.$apply(function () {
          // replace <br>'s with line breaks
          $scope.value = $scope.value.replace(/\n/g, '<br/>');

          $scope.editing = false;
          element.removeClass( 'active' );
        });
      });
    }
  };
}); 
