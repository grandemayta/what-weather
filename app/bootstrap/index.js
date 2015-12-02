/**
 *
 * Created by Gabriel Mayta
 *
 */

require("angular");
require("angular-ui-router");
require("oclazyload");
require("../features/home/home.module");
require("../features/detail/detail.module");

angular
    .module("app", [
        "ui.router",
        "oc.lazyLoad",
        "app.home",
        "app.detail"
    ]);

angular.bootstrap(document.body, ["app"]);
