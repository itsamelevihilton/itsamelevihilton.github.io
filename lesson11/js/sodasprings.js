
var dayNames = ["Sunday","Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"];

const currentapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=4736bd8dfb13dc2570877058ed9f85e9";
const forecastapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=4736bd8dfb13dc2570877058ed9f85e9";

getEvents("Soda Springs");

getWeatherData(currentapiURL, forecastapiURL);