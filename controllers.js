// CONTROLLERS

weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){
	$scope.city = cityService.city;

	$scope.$watch('city', function() { // Watches `$scope.city` for changes and runs digest loop if necessary
		cityService.city = $scope.city // Changes `cityService.city` upon any changes
	});

	$scope.submit = function() { // `submit` is a JS event
		$location.path('/forecast'); // Works like a link
	}
}]);



// $resource - wrapper for $HTTP that makes it easier to get data from an API
weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {

	$scope.city = cityService.city;
	$scope.days = $routeParams.days || '2';

	// FUNCTIONS THAT GET DATA CAN BE PULLED OUT OF CONTROLLERS INTO SERVICES
	// $scope.weatherAPI = $resource(`http://api.openweathermap.org/data/2.5/forecast/daily?APPID=${OPEN_WEATHER_ID}`
	// 	// JSONP says it's ok to get data from 3rd party website
	// 	{
	// 		callback: "JSON_CALLBACK"},
	// 		{ get: { method: "JSONP" }
	// 	}
	// );

	// $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days }); // Makes a call to API for weather and returns an object containing that data
	$scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);


	// WEATHER APP UTILITY FUNCTIONS
	$scope.convertToTempStandard = function(degK) {
		return Math.round((1.8 * (degK - 273)) + 32);
	};
	$scope.convertToDate = function(dt) {
		// `dt` is in miliseconds -- hence `* 1000`
		return new Date(dt * 1000); // Converts to more readable date
	}

}]);