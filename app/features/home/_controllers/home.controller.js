/**
 *
 * Created by Gabriel Mayta
 *
 */

angular
    .module("app.home.home-controller", [])
    .controller("HomeController", HomeController);


HomeController.$inject = [];

function HomeController() {

    var vm = this;

    vm.message = "Hello world!";

}