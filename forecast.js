app.factory('forecast', ['$http', function ($http) {
    var forecast = {};
    forecast.getCountries = function () {
        return $http.get('Countries/GetCountries');
    };

    forecast.getAvgTemp = function (countries) {
        return $http.get('Countries/GetAvgTemps', {
            params: {
                countries: countries
            }
        });
    };

    forecast.GetCountryCities = function (minTemp, maxTemp) {
        return $http.get('../Countries/GetCountryCities', {
            params: {
                minTemp: minTemp,
                maxTemp: maxTemp
            }
        });
    };

    return forecast;
}]);