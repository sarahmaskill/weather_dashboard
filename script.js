var apiKey = "dd1155503169dbd265f7df771042e355"
var searchBTN = document.getElementById("searchBTN")

//fetch 5 day weather for a city
function pullWeather(cityName){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName+ '&units=imperial&appid=' + apiKey)
    .then(function(resp) { return resp.json() }) // Convert data to json
      .then(function(data) {
        console.log(data);
        current(data);
        day1(data);
        day2(data);
        day3(data);
        day4(data);
        day5(data);

      })
      .catch(function() {
        // catch any errors
      });
}
//Pull city name from text box and pull API Data
function cityRequest() {
    var city = document.getElementById("cityName").value
    if (city.length < 1) return;
    else pullWeather("" + city);

  }
//Current Weather
function current( d ) {
    var RequestedDay = 0
    var iconNumber = d.list[RequestedDay].weather[0].icon
    document.getElementById("0conditionIcon").src="http://openweathermap.org/img/wn/" + iconNumber +"@2x.png"
  
	document.getElementById('0description').innerHTML = d.list[RequestedDay].weather[0].description;
	document.getElementById('0temp').innerHTML = d.list[RequestedDay].main.temp + "°";
	document.getElementById('0location').innerHTML = d.city.name;
    document.getElementById('0humidity').innerHTML = d.list[RequestedDay].main.humidity + "%";
    document.getElementById('0wind').innerHTML = d.list[RequestedDay].wind.speed;
    document.getElementById('0date').innerHTML =d.list[RequestedDay].dt_txt;
    
}
//5 Day Weather 
function day1( d ) {
    var RequestedDay = 3
    var iconNumber = d.list[RequestedDay].weather[0].icon
    document.getElementById("1conditionIcon").src="http://openweathermap.org/img/wn/" + iconNumber +"@2x.png"
	document.getElementById('1description').innerHTML = d.list[RequestedDay].weather[0].description;
	document.getElementById('1temp').innerHTML = d.list[RequestedDay].main.temp + "°";
	document.getElementById('1location').innerHTML = d.city.name;
    document.getElementById('1humidity').innerHTML = d.list[RequestedDay].main.humidity + "%";
    document.getElementById('1wind').innerHTML = d.list[RequestedDay].wind.speed;
    document.getElementById('1date').innerHTML =d.list[RequestedDay].dt_txt;
    
}
function day2( d ) {
    var RequestedDay = 11
    var iconNumber = d.list[RequestedDay].weather[0].icon
    document.getElementById("2conditionIcon").src="http://openweathermap.org/img/wn/" + iconNumber +"@2x.png"
	document.getElementById('2description').innerHTML = d.list[RequestedDay].weather[0].description;
	document.getElementById('2temp').innerHTML = d.list[RequestedDay].main.temp + "°";
	document.getElementById('2location').innerHTML = d.city.name;
    document.getElementById('2humidity').innerHTML = d.list[RequestedDay].main.humidity + "%";
    document.getElementById('2wind').innerHTML = d.list[RequestedDay].wind.speed;
    document.getElementById('2date').innerHTML =d.list[RequestedDay].dt_txt;
    
}
function day3( d ) {
    var RequestedDay = 19
    var iconNumber = d.list[RequestedDay].weather[0].icon
    document.getElementById("3conditionIcon").src="http://openweathermap.org/img/wn/" + iconNumber +"@2x.png"
	document.getElementById('3description').innerHTML = d.list[RequestedDay].weather[0].description;
	document.getElementById('3temp').innerHTML = d.list[RequestedDay].main.temp + "°";
	document.getElementById('3location').innerHTML = d.city.name;
    document.getElementById('3humidity').innerHTML = d.list[RequestedDay].main.humidity + "%";
    document.getElementById('3wind').innerHTML = d.list[RequestedDay].wind.speed;
    document.getElementById('3date').innerHTML =d.list[RequestedDay].dt_txt;
    
}
function day4( d ) {
    var RequestedDay = 27
    var iconNumber = d.list[RequestedDay].weather[0].icon
    document.getElementById("4conditionIcon").src="http://openweathermap.org/img/wn/" + iconNumber +"@2x.png"
	document.getElementById('4description').innerHTML = d.list[RequestedDay].weather[0].description;
	document.getElementById('4temp').innerHTML = d.list[RequestedDay].main.temp + "°";
	document.getElementById('4location').innerHTML = d.city.name;
    document.getElementById('4humidity').innerHTML = d.list[RequestedDay].main.humidity + "%";
    document.getElementById('4wind').innerHTML = d.list[RequestedDay].wind.speed;
    document.getElementById('4date').innerHTML =d.list[RequestedDay].dt_txt;
    
}
function day5( d ) {
    var RequestedDay = 35
    var iconNumber = d.list[RequestedDay].weather[0].icon
    document.getElementById("5conditionIcon").src="http://openweathermap.org/img/wn/" + iconNumber +"@2x.png"
	document.getElementById('5description').innerHTML = d.list[RequestedDay].weather[0].description;
	document.getElementById('5temp').innerHTML = d.list[RequestedDay].main.temp + "°";
	document.getElementById('5location').innerHTML = d.city.name;
    document.getElementById('5humidity').innerHTML = d.list[RequestedDay].main.humidity + "%";
    document.getElementById('5wind').innerHTML = d.list[RequestedDay].wind.speed;
    document.getElementById('5date').innerHTML =d.list[RequestedDay].dt_txt;
    
}
//Run Function when Search is Selected
searchBTN.addEventListener("click",cityRequest)
//Save to local data
var history = document.querySelector('#history')

searchBTN.addEventListener('click', 
function (event) {
    var history = document.querySelector('#history')
    var cityName = document.getElementById("cityName").value
    event.preventDefault();
//don't add if no input
if (cityName.length < 1) return;
//add item to list
    history.innerHTML += '<li>' + '<button type= "button" class="btn btn-primary prevCity" id="'+ cityName+'">' + cityName + '</button>' + '</li>';
// Clear input
	cityName = '';
// Save the list to localStorage
	localStorage.setItem('pastCities')
// Check for saved storage items
// If there are any saved items, update our list

//Add Function for Past Requests
function pastCityRequest() {
    var city = btn.id
    pullWeather("" + city);

  }
//Make Past Requests CLicklable
var pastBTN = document.getElementsByClassName("prevCity");

pastBTN.addEventListener("click",pastCityRequest)