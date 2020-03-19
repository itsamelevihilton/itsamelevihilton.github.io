WebFont.load({
  google: {
      families: [
          'Montserrat'
      ]
  }
});

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

function adjustSeverity(severity) {
  document.getElementById("severity").innerHTML = severity;
}

var mod = moment(new Date(document.lastModified));
document.getElementById("date").innerText = mod.format('dddd, DD MMMM YYYY');

var office = {lat: 42.0970234, lng: -111.8735843};
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: office,
    zoom: 13
  });
  var marker = new google.maps.Marker({position: office, map: map});
}
var dayNames = ["Sunday","Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"];

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

function getWeatherData(current, forecast) {
  fetch(current)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('high').textContent = Math.round(jsObject.main.temp_max);
    document.getElementById('low').textContent = Math.round(jsObject.main.temp_min);
    let temperature, speed, chill;
    temperature = jsObject.main.temp;
    speed = jsObject.wind.speed;
    chill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16);
    if (chill == NaN) document.getElementById("windchill").innerHTML = "N/A";
    else document.getElementById("windchill").innerHTML = chill.toFixed(0) + " &#7506;F";
    document.getElementById('windspeed').textContent = Math.round(jsObject.wind.speed);
    document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity) + '%';
  });
  fetch(forecast)
  .then((response) => response.json())
  .then((jsObject) => {
    let divforecast = document.getElementById('forecast');
    jsObject.list.forEach(x => {
        if(x.dt_txt.includes('18:00:00')) {
            let cont = document.createElement('div');
            let h3 = document.createElement('h3');
            let imgdiv = document.createElement('div');
            imgdiv.classList.add('weather');
            let img = document.createElement('img');
            let div = document.createElement('div');
            div.classList.add('temp');
            h3.innerText = dayNames[new Date(x.dt_txt).getDay() % 7];
            img.setAttribute('src', './images/weather/' + imgMap.get(x.weather[0].id));
            img.setAttribute('alt', x.weather[0].description);
            div.innerHTML = Math.round(x.main.temp_max) + " &#7506;F";
            cont.appendChild(h3);
            imgdiv.appendChild(img);
            cont.appendChild(imgdiv);
            cont.appendChild(div);
            divforecast.appendChild(cont);
        }
    });
  });
}
const towndataURL = "https://byui-cit230.github.io/weather/data/towndata.json";
function getEvents(town) {
  fetch(towndataURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let cont = document.createElement('div');
    jsObject.towns.forEach(x => {
      if (x.name != town) return;
      x.events.forEach(y => {
        let event = document.createElement('p');
        event.textContent = y;
        cont.appendChild(event);
      })
    });
    document.getElementById('events').appendChild(cont);
  });
}