app.controller('CountriesController', ['$scope', 'forecast', 'countryService', function ($scope, forecast, countryService) {
    forecast.getCountries()
    .success(function (data) {
        console.log("Received");
        $scope.countries = data;                
    })
    .error(function (data) {
        console.log("Unable to load data");
    });

    $scope.selectedCountries = [];

    $scope.toggleSelection = function toggleSelection(country) {
        var id = $scope.selectedCountries.indexOf(country);
        if (id > -1) {
            $scope.selectedCountries.splice(id, 1);
            countryService.removeCountry(country);
        } else {
            $scope.selectedCountries.push(country);
            
            countryService.addCountries(country);           
        }        
    }
}]);