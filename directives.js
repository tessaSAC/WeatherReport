// DIRECTIVES

weatherApp.directive('weatherReport', function() {
	return {
		restrict: 'E', // SEA -- Restrict to being Element only
		templateUrl: '/directives/weatherReport.html',
		replace: true, // contents replace placeholder
		scope: {
			'weatherDay': '=', // Two-way binding for an object
			'convertToTempStandard': '&', // Two-way binding for function
			'convertToDate': '&',
			'dateFormat': '@' // ONE-way binding for string
		}
	};
});