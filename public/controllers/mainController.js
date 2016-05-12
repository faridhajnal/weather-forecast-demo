var weatherApp = angular.module("weatherApp");


weatherApp.controller("mainController", ["$scope", "cityService", 
function(scope,cityService){
    
    
    scope.city = cityService.city;
    
    scope.$watch('city', function(){
        //watching for city to change
        cityService.city = scope.city; //modify in service, and now the other controller gets updated value
        
    })
    
    //console.log('hello from main controller');
    
}]);