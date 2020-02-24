var year = new Date();
document.getElementById("year").innerText = year.getFullYear();
var mod = moment(new Date(document.lastModified));
document.getElementById("mod").innerText = mod.format('MM/DD/YYYY hh:mm:ss');

WebFont.load({
    google: {
        families: [
            'Montserrat'
        ]
    }
})