WebFont.load({
    google: {
        families: [
            'Cabin',
            'Raleway'
        ]
    }
  });

  function toggleMenu() {
      document.getElementById("primaryNav").classList.toggle("hide");
  }

var mod = moment(new Date(document.lastModified));
document.getElementById("date").innerText = mod.format('dddd, DD MMMM YYYY');
