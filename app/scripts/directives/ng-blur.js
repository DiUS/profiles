angular.module('profilesApp').directive('ngBlur', ['$parse', function($parse) {
  return function(scope, element, attr) {
    var fn = $parse(attr['ngBlur']);
    element.bind('blur', function(event) {
      scope.$apply(function() {
        fn(scope, {$event:event});
      });
    });
  }
}])

angular.module('profilesApp').directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});

angular.module('profilesApp').directive('autoGrow', function() {
  return function(scope, element, attr){
    var $shadow = angular.element('<div></div>').css({
      position: 'absolute',
      top: -10000,
      left: -10000,
      resize:     'none'
    });
    angular.element(document.body).append($shadow);
 
    var update = function() {
      $shadow.css({
        fontSize:   element.css('fontSize'),
        fontFamily: element.css('fontFamily'),
        fontWeight: element.css('fontWeight'),
        lineHeight: element.css('lineHeight')
      })
      $shadow.html(element.val());
      element.css('width',  ($shadow.width() + 15) + 'px');
    }
 
    element.bind('keyup keydown keypress change focus', update);
    update();
  }
});