// global variables 
var city = $('#city')
var searchBtn = $('#search')
var clearBtn = $('#clear')
var currentWeath = $('.curr-title')
var currentTemp = $('.temp')
var currentHumid = $('.humid')
var currentWind = $('.wind')
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
                    let location = data.name;
                    let weathIcon = data.weather[0].icon;
                    let iconUrl = "https://openweathermap.org/img/wn/"+ weathIcon + "@2x.png";
                    let today = dayjs().format('(MM/DD/YYYY)');
                    $(currentWeath).append(location + " ", today + " ", "<img src="+iconUrl+">")

                    let tempF = (data.main.temp -273.15) * 1.8 + 32;
                    $(currentTemp).append("Temperature: " + tempF + " F")

                    let humidity = data.main.humidity + '%';
                    $(currentHumid).append("Humidity: " + humidity)

                    let wind = data.wind.speed;
                    let mph = (wind * 2.237);
                    $(currentWind).append("Wind Speed: " + mph + " mph")
                    forecast(data.name)
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
function forecast(cityName) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIKey;
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data)
            });
        }
        })
}

// function for search button to work
$('#search').on('click', displayWeath);

// function for history buttons to work