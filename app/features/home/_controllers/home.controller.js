/**
 *
 * Created by Gabriel Mayta
 *
 */

angular
    .module("home.module.home-controller", [])
    .controller("HomeController", HomeController);


HomeController.$inject = ["homeResponse"];

function HomeController(homeResponse) {

    var vm = this;

    vm.message = "Hello world!";

    console.log(homeResponse);

}