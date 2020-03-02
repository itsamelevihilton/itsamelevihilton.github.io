// function calcWindChill (temperature, speed) {
    var temperature, speed, chill;
    temperature = document.getElementById("high").innerHTML;
    speed = document.getElementById("windspeed").innerHTML;
    chill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16);
    if (chill == NaN) document.getElementById("windchill").innerHTML = "N/A";
    else document.getElementById("windchill").innerHTML = chill.toFixed(0) + " &#7506;F";
// }

