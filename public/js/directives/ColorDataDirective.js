(function() {
  function ColorDataDirective() {
    return {
      restrict: 'EA',
      link: function($scope, $element, $attrs) {
        console.log("asdasas");
      }
    }
  }

  angular
    .module('clinicaApp')
    .directive('ColorData', ColorDataDirective);
})();