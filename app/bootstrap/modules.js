/**
 *
 * Created by Gabriel Mayta
 *
 */

require("../core/core.module");
require("../features/home/home.config");

angular
    .module("app.modules", [
        "app.core",
        "app.home.config"
    ]);