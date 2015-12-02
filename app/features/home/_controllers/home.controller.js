/**
 *
 * Created by Gabriel Mayta
 *
 */

(function () {

    'use strict';

    angular
        .module("app.home.controllers")
        .controller("HomeController", HomeController);


    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        $scope.message = "Hello world!";
    }

});