var day = new Date().getDay();
if (day != 5) {
    document.getElementById("alert").style.display = "none";
}
const currentapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=4736bd8dfb13dc2570877058ed9f85e9";
const forecastapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=4736bd8dfb13dc2570877058ed9f85e9";

getEvents("Preston");

getWeatherData(currentapiURL, forecastapiURL);