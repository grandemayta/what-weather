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
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure(["./_views/home.html"], function () {
                    var template = require("./_views/home.html");
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
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