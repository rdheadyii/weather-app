// global variables 
var city = $('#city')
var searchBtn = $('#search')
var clearBtn = $('#clear')
// api key
const APIKey = "4173452d9b72669e3cd2657d87b52eff";

// weather search history array


// function to display search history
    // loop over history array and count down so most recent at the top

// function to update search history in local storage

// function to get search history from local storage

// function to display current weather from fetch request
    // need icon, temp, humidity, date, wind speed, location name

var currentWeath = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

// function display 5 day forecast data from fetch request
    // need icon, temp, humidity, date, wind speed
var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

// create elements to hold each of above

// function to display 5 day for each of the cards

// function for geolocation with lat lon
    // call function above inside so data is usable

// function for search button to work

// function for history buttons to work