var apiKey = "dd1155503169dbd265f7df771042e355"
var city = document.getElementById("cityName").value
var searchBTN = document.getElementById("searchBTN")

//fetch current weather for a city
function currentWeather(cityName){
fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName+ '&units=imperial&appid=' + apiKey)
.then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data)
  })
  .catch(function() {
    // catch any errors
  });
}
function cityRequest() {
    currentWeather("Detroit");
  }
function drawWeather( d ) {
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = d.main.temp;
	document.getElementById('location').innerHTML = d.name;
    document.getElementById('humidity').innerHTML = d.main.humidity;
    document.getElementById('wind').innerHTML = d.wind.speed;
    document.getElementById('date').innerHTML =d.dt;
    
}

//fetch 5 day weather for a city
function fiveDayWeather(cityName){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName+ '&units=metric&appid=' + apiKey)
    .then(function(resp) { return resp.json() }) // Convert data to json
      .then(function(data) {
        console.log(data);
      })
      .catch(function() {
        // catch any errors
      });
    }
    window.onload = function() {
        fiveDayWeather("Detroit");
      }
//store city in local data
//create a button for city stored in local data
searchBTN.addEventListener("click",cityRequest)