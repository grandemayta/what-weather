/**
 *
 * Created by Gabriel Mayta
 *
 */

angular
    .module("app.services.stateResolve", [])
    .factory("StateResolve", StateResolve);

StateResolve.$inject = ["$q", "$http"];

function StateResolve($q, $http) {

    return function (cities) {

        var baseUrl = "https://query.yahooapis.com/v1/public/yql",
            format = "format=json",
            query = "SELECT * FROM " +
                "weather.forecast " +
                "WHERE woeid " +
                "IN (SELECT woeid FROM geo.places(1) WHERE text IN (" + cities + ") )";

        var deferred = $q.defer();

        $http
            .get(baseUrl + "?q=" + query + "&" + format)
            .then(
                function (success) {
                    deferred.resolve(success.data.query.results.channel);
                },
                function (error) {
                    deferred.reject(error);
                }
            );

        return deferred.promise;
    };

}