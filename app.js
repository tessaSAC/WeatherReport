// MODULE
const weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);



// // ROUTES
// weatherApp.config(function($routeProvider) {
// 	$routeProvider
// 		.when('/', {
// 			templateUrl: 'pages/home.html',
// 			controller: 'homeController'
// 		})
// 		.when('/forecast', {
// 			templateUrl: 'pages/forecast.html',
// 			controller: 'forecastController'
// 		})
// 		.when('/forecast/:days', {
// 			templateUrl: 'pages/forecast.html',
// 			controller: 'forecastController'
// 		})
// });



// // SERVICES
// weatherApp.service('cityService', [function() {
// 	this.city = 'New York, NY';
// }]);



// // CONTROLLERS
// weatherApp.controller('homeController', ['$scope', '$resource', 'cityService', function($scope, cityService){
// 	$scope.city = cityService.city;

// 	$scope.$watch('city', function() { // Watches `$scope.city` for changes and runs digest loop if necessary
// 		cityService.city = $scope.city // Changes `cityService.city` upon any changes
// 	});
// }]);


// // $resource - wrapper for $HTTP that makes it easier to get data from an API
// weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {

// 	$scope.city = cityService.city;
// 	$scope.days = $routeParams.days || '2';

// 	$scope.weatherAPI = $resource(`http://api.openweathermap.org/data/2.5/forecast/daily?APPID=${OPEN_WEATHER_ID}`,
// 		// Says it's ok to get data from 3rd party website
// 		{
// 			callback: "JSON_CALLBACK"},
// 			{ get: { method: "JSONP" }
// 		}
// 	);

// 	$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days }); // Makes a call to API for weather and returns an object containing that data


// 	// WEATHER APP UTILITY FUNCTIONS

// 	$scope.convertToTempStandard = function(degK) {
// 		return Math.round((1.8 * (degK - 273)) + 32);
// 	};

// 	$scope.convertToDate = function(dt) {
// 		// `dt` is in miliseconds -- hence `* 1000`
// 		return new Date(dt * 1000); // Converts to more readable date
// 	}
// }]);




// // DIRECTIVES

// weatherApp.directive('weatherReport', function() {
// 	return {
// 		restrict: 'E', // SEA -- Restrict to being Element only
// 		templateUrl: '/directives/weatherReport.html',
// 		replace: true, // contents replace placeholder
// 		scope: {
// 			'weatherDay': '=', // Two-way binding for an object
// 			'convertToTempStandard': '&', // Two-way binding for function
// 			'convertToDate': '&',
// 			'dateFormat': '@' // ONE-way binding for string
// 		}
// 	};
// })
