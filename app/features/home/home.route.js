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
            template: "<h1 ng-bind='home.message'></h1>"
        });

    $urlRouterProvider.otherwise("/");

}