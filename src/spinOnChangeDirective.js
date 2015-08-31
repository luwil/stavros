'use strict';

angular.module('stavrosApp').directive('spinOnChange', function ($timeout, $parse) {
  return {
    link: function (scope, element, attrs) {
      var model = $parse(attrs.spinOnChange);
      scope.$watch(model, function () {
        console.log('Spin change!', model);
        element.removeClass("spinEffect");
        $timeout(function () {
          element.addClass("spinEffect");
        });
      }, true);
    }
  };
});

