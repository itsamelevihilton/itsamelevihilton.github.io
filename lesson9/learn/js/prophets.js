WebFont.load({
    google: {
        families: [
            'Montserrat'
        ]
    }
  });

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then (function (jsonObject) {
        console.log(jsonObject);
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let bdate = document.createElement('p');
            let place = document.createElement('p');
            let img = document.createElement('img');
        
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            bdate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            place.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            img.setAttribute('src', prophets[i].imageurl);
        
            card.appendChild(h2);
            card.appendChild(bdate);
            card.appendChild(place);
            card.appendChild(img);
        
            document.querySelector('div.cards').appendChild(card);
        }
    });