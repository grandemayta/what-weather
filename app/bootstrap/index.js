/**
 *
 * Created by Gabriel Mayta
 *
 */

require("angular");
require("angular-ui-router");
require("oclazyload");

require("../core/services/services.module");
require("../features/features.module");

angular
    .module("app", [
        "ui.router",
        "oc.lazyLoad",
        "app.services",
        "app.features"
    ]);

angular.bootstrap(document.body, ["app"]);
