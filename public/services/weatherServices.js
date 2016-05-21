//var weatherApp = angular.module("weatherApp");

weatherApp.service('cityService', function(){
    
    this.city = "Mexico City, MX"; //default value.
    
    
});


weatherApp.service('weatherService', ['$resource', function(resource){


	this.getWeather=function(city,days){  //this is the srvice

			var weatherAPI = 
		    resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=000983ad3a23d1c6c860d91c81abf4b2", 
		    	{ callback: "JSON_CALLBACK"},
		    	{get: { method: "JSONP"}});

		    return weatherAPI.get({ q: city, cnt : days});

		    // q and cnt are parameteres for the api



	}



}]);

//services can also be injected in custom services!!