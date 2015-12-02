/**
 *
 * Created by Gabriel Mayta
 *
 */

angular
    .module("app.home.route", [])
    .config(HomeRoute);

HomeRoute.$inject = ["$stateProvider", "$urlRouterProvider"];

function HomeRoute($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("home", {
            url: "/",
            controller: "HomeController",
            controllerAs: "home",
            template: require("./_views/home.html"),
            resolve: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                    var module = require("./_controllers/home.controller");
                    $ocLazyLoad.load({name: "app.home.controllers"});
                    deferred.resolve(module);
                });
                return deferred.promise;
            }]
        });

    $urlRouterProvider.otherwise("/");

}