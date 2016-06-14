app.controller('CountryCitiesController', ['$scope', 'forecast', function ($scope, forecast) {
    
    $scope.minTemp;
    $scope.maxTemp;

    $scope.getCities = function (minTemp, maxTemp) {
        forecast.GetCountryCities(minTemp, maxTemp)
        .success(function (data) {
            $scope.countryCities = data;            

        })
        .error(function (data) {
            console.log(data);
        });
    };

    
        $scope.modifiedData = "";

        $scope.modifyData = function (data) {
            var a = "";
            for (var i = 0; i < data.length; i++) {
                a = a + data[i];
                a = a + ", ";
            }

            $scope.modifiedData = a;

            return a;
        };
    
}]);