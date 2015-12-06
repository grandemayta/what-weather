/**
 *
 * Created by Gabriel Mayta
 *
 */

require("angular");
require("angular-ui-router");
require("oclazyload");

require("../scss/index.scss");

require("../core/services/services.module");
require("../core/directives/directives.module");
require("../features/features.module");

angular
    .module("app", [
        "ui.router",
        "oc.lazyLoad",
        "app.services",
        "app.directives",
        "app.features"
    ]);

angular.bootstrap(document.body, ["app"]);
