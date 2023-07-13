// global variables 
var city = $('#city')
var searchBtn = $('#search')
var clearBtn = $('#clear')
var currentWeath = $('#weather')
var fiveDayWeath = $('#five-day')
var currentCity = '';

// api key
const APIKey = "4173452d9b72669e3cd2657d87b52eff";

// weather search history array
var searchedWeath = [];

// function to display search history
    // loop over history array and count down so most recent at the top

// function to update search history in local storage

// function to get search history from local storage

// function to display current weather from fetch request
    // need icon, temp, humidity, date, wind speed, location name

function displayWeath(event){
    event.preventDefault();
    if (city !== "") {
        currentCity = city.val().trim();
        cityWeath(currentCity);
    } else {
        return;
    }
};

function cityWeath(currentCity) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&appid=" + APIKey;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data)
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to OpenWeather')
        });

}

// function display 5 day forecast data from fetch request
    // need icon, temp, humidity, date, wind speed

// create elements to hold each of above
function weathContainer() {
    
}

// function to display 5 day for each of the cards

// function for geolocation with lat lon
    // call function above inside so data is usable

// function for search button to work
$('#search').on('click', displayWeath);

// function for history buttons to work