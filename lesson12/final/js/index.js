const imgMap = new Map();
imgMap.set(201, "thunderstorm.svg");
imgMap.set(211, "thunderstorm.svg");
imgMap.set(212, "thunderstorm.svg");
imgMap.set(221, "thunderstorm.svg");
imgMap.set(200, "thundershowers.svg");
imgMap.set(230, "thundershowers.svg");
imgMap.set(231, "thundershowers.svg");
imgMap.set(201, "thundershowersmed.svg");
imgMap.set(232, "thundershowersmed.svg");
imgMap.set(202, "thundershowersheavy.svg");
imgMap.set(300, "rain.svg");
imgMap.set(301, "rain.svg");
imgMap.set(310, "rain.svg");
imgMap.set(500, "rain.svg");
imgMap.set(520, "rain.svg");
imgMap.set(302, "rainmed.svg");
imgMap.set(311, "rainmed.svg");
imgMap.set(313, "rainmed.svg");
imgMap.set(321, "rainmed.svg");
imgMap.set(501, "rainmed.svg");
imgMap.set(521, "rainmed.svg");
imgMap.set(312, "rainheavy.svg");
imgMap.set(314, "rainheavy.svg");
imgMap.set(502, "rainheavy.svg");
imgMap.set(503, "rainheavy.svg");
imgMap.set(522, "rainheavy.svg");
imgMap.set(504, "rainheavy.svg");
imgMap.set(531, "rainheavy.svg");
imgMap.set(511, "wetsnow.svg");
imgMap.set(611, "wetsnow.svg");
imgMap.set(612, "wetsnow.svg");
imgMap.set(613, "wetsnow.svg");
imgMap.set(615, "wetsnow.svg");
imgMap.set(616, "wetsnow.svg");
imgMap.set(600, "snow.svg");
imgMap.set(620, "snow.svg");
imgMap.set(601, "snowmed.svg");
imgMap.set(621, "snowmed.svg");
imgMap.set(602, "snowheavy.svg");
imgMap.set(622, "snowheavy.svg");
imgMap.set(701, "foggy.svg");
imgMap.set(711, "foggy.svg");
imgMap.set(721, "foggy.svg");
imgMap.set(741, "foggy.svg");
imgMap.set(771, "foggy.svg");
imgMap.set(731, "windy.svg");
imgMap.set(751, "windy.svg");
imgMap.set(761, "windy.svg");
imgMap.set(781, "windy.svg");
imgMap.set(800, "sunny.svg");
imgMap.set(801, "cloudypartly.svg");
imgMap.set(802, "cloudypartly.svg");
imgMap.set(803, "cloudy.svg");
imgMap.set(804, "cloudy.svg");

var dayNames = ["Sunday","Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"];

const currentapiURL = "https://api.openweathermap.org/data/2.5/weather?lat=45.418167&lon=-116.317760&units=imperial&APPID=4736bd8dfb13dc2570877058ed9f85e9";

fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.418167&lon=-116.317760&units=imperial&APPID=4736bd8dfb13dc2570877058ed9f85e9")
.then((response) => response.json())
.then((jsObject) => {
    document.getElementById('currentimg').setAttribute('src', './img/weather/' + imgMap.get(jsObject.weather[0].id));
    document.getElementById('currentimg').setAttribute('alt', jsObject.weather[0].description);
    document.getElementById('weatherdesc').textContent = jsObject.weather[0].main;
    document.getElementById('high').innerHTML = Math.round(jsObject.main.temp_max) + " &#7506;F";
    document.getElementById('low').innerHTML = Math.round(jsObject.main.temp_min) + " &#7506;F";
    let temperature, speed, chill;
    temperature = jsObject.main.temp;
    speed = jsObject.wind.speed;
    chill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16);
    if (chill == NaN) document.getElementById("windchill").innerHTML = "N/A";
    else document.getElementById("windchill").innerHTML = chill.toFixed(0) + " &#7506;F";
    document.getElementById('windspeed').textContent = Math.round(jsObject.wind.speed) + " mph";
    document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity) + '%';
});