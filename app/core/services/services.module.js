/**
 *
 * Created by Gabriel Mayta
 *
 */

require("./StateResolve");
require("./ModuleResolve");
require("./TemplateResolve");

angular
    .module("app.services", [
        "app.services.stateResolve",
        "app.services.moduleResolve",
        "app.services.templateResolve"
    ]);