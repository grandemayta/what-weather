/**
 *
 * Created by Gabriel Mayta
 *
 */

angular
    .module("app.detail.controllers", [])
    .controller("DetailController", DetailController);


DetailController.$inject = [];

function DetailController() {

    var vm = this;

    vm.message = "Hello world!";

}