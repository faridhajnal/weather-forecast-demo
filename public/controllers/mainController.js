var weatherApp = angular.module("weatherApp");


weatherApp.controller("mainController", ["$scope", "$location", "cityService", 
function(scope,location,cityService){
    
    var inputbox = document.getElementById('text input');
    scope.city = cityService.city;
    
    scope.$watch('city', function(){
        //watching for city to change
        cityService.city = scope.city; //modify in service, and now the other controller gets updated value
        
    })

    scope.resetMethod = function(){

    	scope.city = "";
    	document.getElementById('city-input').focus();
    	//console.log('Click on reset button ');

    }

    scope.submit = function(){

    	location.path("/forecast"); //link behavior


    }
    
    //console.log('hello from main controller');
    
}]);