//MODULE
var weatherApp = angular.module('weatherApp',['ngRoute', 'ngResource']); //note no dashes for services
//console.log('Starting app... :D');

//ROUTES

weatherApp.config(function($routeProvider){
    
    $routeProvider

    .when('/', {

        templateUrl: 'pages/home.html',
        controller: 'mainController'

    })

    .when('/forecast', {

        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'

    })

    .when('/forecast/:days',{

        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
        
    })
    
    
});


//SERVICES ((CUSTOM))

weatherApp.service('cityService', function(){
    
    this.city = "Mexico City, MX"; //default value.
    
    
})

//CONTROLLERS ON SEPARATE FILES


    //var apikey = "000983ad3a23d1c6c860d91c81abf4b2"

//var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&APPID="000983ad3a23d1c6c860d91c81abf4b2"