var weatherApp = angular.module("weatherApp");


weatherApp.controller("mainController", ["$scope", "cityService", 
function(scope,cityService){
    
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
    
    //console.log('hello from main controller');
    
}]);