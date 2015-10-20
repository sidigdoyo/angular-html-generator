(function(window, angular, undefined) {
    "use strict";
    angular.module("msp.generator", []).directive("htmlGenerator", [ "$compile", function($compile) {
        return {
            restrict: "E",
            scope: {
                config: "="
            },
            link: function(scope, element) {
                var child = angular.element("<" + scope.config.tag + " />");
                if (scope.config.inner) {
                    child = child.append('<html-generator ng-repeat="inner in config.inner" config="inner"></html-generator>');
                }
                angular.forEach(scope.config.attr, function(value, key) {
                    child.attr(key, value);
                });
                if (scope.config.innerHtml) {
                    child.html(scope.config.innerHtml);
                }
                element.replaceWith($compile(child)(scope));
            }
        };
    } ]);
})(window, window.angular);