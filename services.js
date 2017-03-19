// SERVICES

const OPEN_WEATHER_ID = config.OPEN_WEATHER_ID;

weatherApp.service('cityService', [function() {
	this.city = 'New York, NY';
}]);



// $resource - wrapper for $HTTP that makes it easier to get data from an API
weatherApp.service('weatherService', ['$resource', function($resource) {
	this.GetWeather = function(city, days) {
		const weatherAPI = $resource(`http://api.openweathermap.org/data/2.5/forecast/daily?APPID=${OPEN_WEATHER_ID}`,
			// JSONP says it's ok to get data from 3rd party website
			{
				callback: "JSON_CALLBACK"},
				{ get: { method: "JSONP" }
			}
		);

		return weatherAPI.get({ q: city, cnt: days })
	};
}]);