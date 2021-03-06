/*

1. Sign up for openweathermap.org and generate an API key.
2. User either $.ajax or $.get to pull weather current data .
   for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
3. Print the temperature in the console. Note that the temperature will be in Kelvin.
4. Incorporate the following code into your app to log a Fahrenheit value for the temperature to the console
   (Fahrenheit temperature is stored in the degFInt variable):
   var degF = (temp - 273.15) * 1.8 + 32;
   var degFInt = Math.floor(degF);
5. Use DOM manipulation to add the returned temperature to the span element with the id "temp".
6. Sign up for developer.weatherunlocked.com and obtain your application ID and application key.
7. Repeat the above steps to obtain the current temperature from this data source, convert it to Fahrenheit,
   log it to the console, and then add it to the DOM (uncomment out the 3 lines indicated in index.html for this step,
   and add your temperature value to the span elmeent with the id "temp2").
8. Refactor your code as necessary to separate the code for DOM manipulation from the code for sending an HTTP request.
BONUS: Implement a form that prompts users for a city and state and returns data for the location they specify 
   (Uncomment out the existing form code in index.html as marked).

*/

'use strict';

let opWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=San+Francisco";
// REMOVED KEY
let opApiKey = "";
let degFInt = '';

$.ajax({
	url: opWeatherUrl + '&APPID=' + opApiKey,
	data: {
		format: "json"
	},
	success: function(response) {
		degFInt = Math.floor((response.main.temp - 273.15) * 1.8 + 32);
		console.log(degFInt);
		// How to separate next three-four lines from the AJAX function?
		addTemp('temp', degFInt);
		//let $tempElement = $('#temp');
    //console.log($tempElement);
    //$tempElement.html(degFInt);
	}
})

let weatherUnUrl = 'http://api.weatherunlocked.com/api/current/37.7,-122.4';
// REMOVED KEYS
let weatherUnAppId = '';
let weatherUnApiKey = '';

$.ajax({
	url: weatherUnUrl + '?app_id=' + weatherUnAppId + '&app_key=' + weatherUnApiKey,
	data: {
		format: "json"
	},
	success: function(response) {
		addTemp('temp2', response.temp_f);
	}
})

function addTemp(tempId, tempF) {
	let $tempElement = $('#'+tempId);
  $tempElement.html(tempF);
}