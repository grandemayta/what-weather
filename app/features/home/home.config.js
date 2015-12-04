/**
 *
 * Created by Gabriel Mayta
 *
 */

angular
    .module("app.features.home", [])
    .config(HomeRoute);

HomeRoute.$inject = ["$stateProvider", "$urlRouterProvider"];

function HomeRoute($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("home", {
            url: "/",
            controller: "HomeController",
            controllerAs: "home",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/home.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }],
            resolve: {
                load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                            var module = require("./home.module");
                            $ocLazyLoad.load({name: "home.module"});
                            deferred.resolve(module);
                        }
                    );
                    return deferred.promise;
                }],
                homeResponse: ["StateResolve", function (StateResolve) {
                    return StateResolve("\"Milan\", \"London\", \"Paris\"");
                }]
            }
        });

    $urlRouterProvider.otherwise("/");

}