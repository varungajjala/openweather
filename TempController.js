app.controller('TempController', ['$scope', 'forecast', 'countryService', function ($scope, forecast, countryService) {


        $scope.calculateTemps = function () {
            forecast.getAvgTemp(countryService.selectedCountries())
            .success(function (data) {
                $scope.avgtemps = data;
            })
            .error(function (data) {
                console.log(data);
            });
        
        
        };
    
    
}]);