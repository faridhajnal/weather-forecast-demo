var weatherApp = angular.module("weatherApp");

weatherApp.directive("weatherReport", function(){
	console.log('constructing directive');
	return{

		restrict : 'E',
		templateUrl : 'directives/weatherReport.html',
		replace : true,
		scope:{

			weatherDay : "=",
			convertToStandard : "&",
			convertToDate : "&",
			dateFormat : "@"

		}

	}

});