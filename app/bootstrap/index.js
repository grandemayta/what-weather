/**
 *
 * Created by Gabriel Mayta
 *
 */

require("angular");
require("angular-ui-router");
require("oclazyload");
require("./modules");

angular
    .module("app", [
        "ui.router",
        "oc.lazyLoad",
        "app.modules"
    ]);

angular.bootstrap(document.body, ["app"]);
