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
    pullWeather("" + city);

    //add city to local storage
    //create clickable button
  }
//Current Weather
function current( d ) {
    var RequestedDay = 0
    var img = document.createElement("img")
    var iconNumber = d.list[RequestedDay].weather[0].icon
    img.src= "http://openweathermap.org/img/wn/" + iconNumber +"@2x.png"
    document.getElementById('0conditionIcon').appendChild(img)
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
    var img = document.createElement("img")
    var iconNumber = d.list[RequestedDay].weather[0].icon
    img.src= "http://openweathermap.org/img/wn/" + iconNumber +"@2x.png"
    document.getElementById('1conditionIcon').appendChild(img)
	document.getElementById('1description').innerHTML = d.list[RequestedDay].weather[0].description;
	document.getElementById('1temp').innerHTML = d.list[RequestedDay].main.temp + "°";
	document.getElementById('1location').innerHTML = d.city.name;
    document.getElementById('1humidity').innerHTML = d.list[RequestedDay].main.humidity + "%";
    document.getElementById('1wind').innerHTML = d.list[RequestedDay].wind.speed;
    document.getElementById('1date').innerHTML =d.list[RequestedDay].dt_txt;
    
}
function day2( d ) {
    var RequestedDay = 11
    var img = document.createElement("img")
    var iconNumber = d.list[RequestedDay].weather[0].icon
    img.src= "http://openweathermap.org/img/wn/" + iconNumber +"@2x.png"
    document.getElementById('2conditionIcon').appendChild(img)
	document.getElementById('2description').innerHTML = d.list[RequestedDay].weather[0].description;
	document.getElementById('2temp').innerHTML = d.list[RequestedDay].main.temp + "°";
	document.getElementById('2location').innerHTML = d.city.name;
    document.getElementById('2humidity').innerHTML = d.list[RequestedDay].main.humidity + "%";
    document.getElementById('2wind').innerHTML = d.list[RequestedDay].wind.speed;
    document.getElementById('2date').innerHTML =d.list[RequestedDay].dt_txt;
    
}
function day3( d ) {
    var RequestedDay = 19
    var img = document.createElement("img")
    var iconNumber = d.list[RequestedDay].weather[0].icon
    img.src= "http://openweathermap.org/img/wn/" + iconNumber +"@2x.png"
    document.getElementById('3conditionIcon').appendChild(img)
	document.getElementById('3description').innerHTML = d.list[RequestedDay].weather[0].description;
	document.getElementById('3temp').innerHTML = d.list[RequestedDay].main.temp + "°";
	document.getElementById('3location').innerHTML = d.city.name;
    document.getElementById('3humidity').innerHTML = d.list[RequestedDay].main.humidity + "%";
    document.getElementById('3wind').innerHTML = d.list[RequestedDay].wind.speed;
    document.getElementById('3date').innerHTML =d.list[RequestedDay].dt_txt;
    
}
function day4( d ) {
    var RequestedDay = 27
    var img = document.createElement("img")
    var iconNumber = d.list[RequestedDay].weather[0].icon
    img.src= "http://openweathermap.org/img/wn/" + iconNumber +"@2x.png"
    document.getElementById('4conditionIcon').appendChild(img)
	document.getElementById('4description').innerHTML = d.list[RequestedDay].weather[0].description;
	document.getElementById('4temp').innerHTML = d.list[RequestedDay].main.temp + "°";
	document.getElementById('4location').innerHTML = d.city.name;
    document.getElementById('4humidity').innerHTML = d.list[RequestedDay].main.humidity + "%";
    document.getElementById('4wind').innerHTML = d.list[RequestedDay].wind.speed;
    document.getElementById('4date').innerHTML =d.list[RequestedDay].dt_txt;
    
}
function day5( d ) {
    var RequestedDay = 35
    var img = document.createElement("img")
    var iconNumber = d.list[RequestedDay].weather[0].icon
    img.src= "http://openweathermap.org/img/wn/" + iconNumber +"@2x.png"
    document.getElementById('5conditionIcon').appendChild(img)
	document.getElementById('5description').innerHTML = d.list[RequestedDay].weather[0].description;
	document.getElementById('5temp').innerHTML = d.list[RequestedDay].main.temp + "°";
	document.getElementById('5location').innerHTML = d.city.name;
    document.getElementById('5humidity').innerHTML = d.list[RequestedDay].main.humidity + "%";
    document.getElementById('5wind').innerHTML = d.list[RequestedDay].wind.speed;
    document.getElementById('5date').innerHTML =d.list[RequestedDay].dt_txt;
    
}
//Run Function when Search is Selected
searchBTN.addEventListener("click",cityRequest)