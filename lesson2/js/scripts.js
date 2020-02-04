
document.getElementById("year").innerText = new Date().getFullYear();
var mod = moment(new Date(document.lastModified));
document.getElementById("mod").innerText = mod.format('MM/DD/YYYY hh:mm:ss');