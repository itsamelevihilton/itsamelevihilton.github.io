const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then (function (jsonObject) {
        console.log(jsonObject);
        const towns = jsonObject['towns'];
        const mytowns = ['Preston', 'Soda Springs', 'Fish Haven'];

        mytowns.forEach(mystring => {
            let townObj = towns.find(x => x.name === mystring)
            let card = document.createElement('section');
            let text = document.createElement('div');
            let h2 = document.createElement('h2');
            let h4 = document.createElement('h4');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let img = document.createElement('img');
        
            h2.textContent = townObj.name;
            h4.innerHTML = '<i>' + townObj.motto + '<i>';
            founded.textContent = 'Year Founded: ' + townObj.yearFounded;
            population.textContent = 'Population: ' + townObj.currentPopulation;
            rainfall.textContent = 'Annual Rainfall: ' + townObj.averageRainfall;
            img.setAttribute('src', './images/' + townObj.photo);
            let name = townObj.photo.slice(0, -4);
            img.setAttribute('alt', townObj.photo);
            img.setAttribute('sizes', '100vw');
            img.setAttribute('srcset', './images/' + name + '363.jpg 363w, ./images/' + '508.jpg 508w, ./images/' + name + '684.jpg 684w');
        
            text.appendChild(h2);
            text.appendChild(h4);
            text.appendChild(founded);
            text.appendChild(population);
            text.appendChild(rainfall);
            card.appendChild(text);
            card.appendChild(img);
            document.querySelector('main.cards').appendChild(card);
        });
    });