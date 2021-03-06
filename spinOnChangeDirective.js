'use strict';

/**
 * Chrome only... trigger CSS animation by adding/removing class
 */
angular.module('stavrosApp').directive('spinOnChange', function ($timeout, $parse) {
  return {
    link: function (scope, element, attrs) {
      var model = $parse(attrs.spinOnChange);
      scope.$watch(model, function () {
        element.removeClass("spinEffect");
        $timeout(function () {
          element.addClass("spinEffect");
        });
      }, true);
    }
  };
});

