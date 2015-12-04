/**
 *
 * Created by Gabriel Mayta
 *
 */

angular
    .module("app.features.detail", [])
    .config(DetailRoute);

DetailRoute.$inject = ["$stateProvider"];

function DetailRoute($stateProvider) {

    $stateProvider
        .state("page2", {
            url: "/page2",
            controller: "DetailController",
            controllerAs: "detail",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/detail.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }],
            resolve: {
                load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                            var module = require("./detail.module");
                            $ocLazyLoad.load({name: "detail.module"});
                            deferred.resolve(module);
                        }
                    );
                    return deferred.promise;
                }]
            }
        });

}