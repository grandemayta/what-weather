/**
 *
 * Created by Gabriel Mayta
 *
 */

require("../core/core.module");
require("../features/home/home.config");
require("../features/detail/detail.config");

angular
    .module("app.modules", [
        "app.core",

        "app.home",
        "app.detail"
    ]);