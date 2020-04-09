const requestURL = 'https://itsamelevihilton.github.io/lesson12/final/guides.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then (function (jsonObject) {

        jsonObject.list.forEach(x => {
            let guidecont = document.createElement('div');
            guidecont.classList.add("guidecont")
            let img = document.createElement('img');
            let data = document.createElement('div');
            data.classList.add('data')
            let name = document.createElement('h2');
            let cert = document.createElement('p');
            let certdata = document.createElement('p');
            let exp = document.createElement('p');
            let expdata = document.createElement('p');
            let email = document.createElement('p');
            let emaildata = document.createElement('p');
            let bio = document.createElement('p');
            let biodata = document.createElement('p');

            img.setAttribute('src', './img/' + x.photo);
            img.setAttribute('alt', x.photo);
            name.textContent = x.name;
            cert.textContent = 'Certification Level:'
            certdata.textContent = x.certification;
            exp.textContent = 'Years of Experience:'
            expdata.textContent = x.yearsExperience;
            email.textContent = 'Email:';
            emaildata.textContent = x.email;
            bio.textContent = 'Bio:';
            biodata.textContent = x.biography;
        
            data.appendChild(name);
            data.appendChild(cert);
            data.appendChild(certdata);
            data.appendChild(exp);
            data.appendChild(expdata);
            data.appendChild(email);
            data.appendChild(emaildata);
            data.appendChild(bio);
            data.appendChild(biodata);
            guidecont.appendChild(img);
            guidecont.appendChild(data);
            document.getElementById('crew').appendChild(guidecont);
        });
    });