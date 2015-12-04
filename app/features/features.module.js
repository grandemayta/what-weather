/**
 *
 * Created by Gabriel Mayta
 *
 */

require("./home/home.config");
require("./detail/detail.config");

angular
    .module("app.features", [
        "app.features.home",
        "app.features.detail"
    ]);