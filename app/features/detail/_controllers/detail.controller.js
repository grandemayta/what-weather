/**
 *
 * Created by Gabriel Mayta
 *
 */

angular
    .module("app.detail.feature.detail-controller", [])
    .controller("DetailController", DetailController);


DetailController.$inject = [];

function DetailController() {

    var vm = this;

    vm.message = "Hello world!";

}