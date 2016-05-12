var weatherApp = angular.module("weatherApp");

//NO USAR PUTOS SERVICIOS EN CONTROLADORES!!!!!!!

weatherApp.controller("forecastController", ["$scope", "$resource", "$routeParams", "cityService",
 function(scope, resource, routeParams, cityService){
    
    scope.city = cityService.city;

    scope.days = routeParams.days || 2; //default value for when there's no param on ur (normal /forecast)

    scope.weatherAPI = 
    resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=000983ad3a23d1c6c860d91c81abf4b2", 
    	{ callback: "JSON_CALLBACK"},
    	{get: { method: "JSONP"}});

    scope.weatherResult = scope.weatherAPI.get({ q: scope.city, cnt : scope.days});

    // q and cnt are parameteres for the api

    //console.log('hello from forecast controller');

    console.log(scope.weatherResult);

    scope.convertToCelsius = function(degKelvin){

    	var celciusValue = degKelvin - 273.15; //convert with math relation
    	return celciusValue.toFixed(2); //round to two decimals :D

    }

    scope.convertToDate = function(value){

    	return new Date(value * 1000);

    }



    //filter can be used directlty on HTML((template))
    
}]);