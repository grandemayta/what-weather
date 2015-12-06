/**
 *
 * Created by Gabriel Mayta
 *
 */

angular
    .module("app.directives.wwTabs", [])
    .directive("wwTabs", wwTabs);

wwTabs.$inject = ["$window"];

function wwTabs($window) {
    return {
        restrict: "EA",
        scope: {
            items: "="
        },
        template: tabsTemplate,
        controller: tabsController,
        controllerAs: "vm",
        bindToController: true,
        replace: true
    };
}

function tabsController($window, $timeout) {
    var vm = this;
    vm.tabHeight = $window.innerHeight;
    $timeout(function () {
        var tab = new Swiper(".swiper-container");
    }, 200);

    console.log(vm);

    angular
        .element($window)
        .bind("resize", function () {
            $timeout(function () {
                vm.tabHeight = $window.innerHeight;
            }, 200);
        });

}

function tabsTemplate() {
    return '\
            <div class="swiper-container">\
            \
                <div class="swiper-wrapper">\
                    <div ng-repeat="item in vm.items" style="height: {{vm.tabHeight}}px;" class="swiper-slide">\
                        <div class="swiper-slide-content">\
                            <h1 ng-bind="item.location.city"></h1>\
                            <h2 ng-bind="item.item.condition.temp"></h2>\
                            <i class="weather-icon wi wi-yahoo-{{item.item.condition.code}}"></i>\
                            <h3 ng-bind="item.item.condition.text">Sunny</h3>\
                            <ul>\
                                <li ng-if="$index > 0" ng-repeat="forecast in item.item.forecast">\
                                    <span ng-bind="forecast.day"></span>\
                                    <i class="wi wi-yahoo-{{forecast.code}}"></i>\
                                </li>\
                            </ul>\
                        </div>\
                    </div>\
                </div>\
            \
            </div>\
            \
           ';

}