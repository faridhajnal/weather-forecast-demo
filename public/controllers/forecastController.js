var weatherApp = angular.module("weatherApp");

//NO USAR PUTOS SERVICIOS EN CONTROLADORES!!!!!!!

weatherApp.controller("forecastController", ["$scope","$routeParams", "cityService", "weatherService",
 function(scope, routeParams, cityService, weatherService){
    
    scope.city = cityService.city;

    scope.days = routeParams.days || '2'; //default value for when there's no param on ur (normal /forecast)

    
    //console.log('hello from forecast controller');

    scope.weatherResult = weatherService.getWeather(scope.city,scope.days);

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