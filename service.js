app.service('countryService', function () {
    var selectedCountryList = [];

    var addCountries = function(country){
        selectedCountryList.push(country);
    };

    var removeCountry = function (country) {
        var id = selectedCountryList.indexOf(country);
        selectedCountryList.splice(id, 1);
    };

    var selectedCountries = function(){
        return selectedCountryList;
    };

    var checkEmpty = function () {
        if (selectedCountryList.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    return {
        addCountries: addCountries,
        selectedCountries: selectedCountries,
        removeCountry: removeCountry,
        checkEmpty: checkEmpty
    };
});