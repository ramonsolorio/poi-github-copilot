// script.js
let cats = [];

function addCat() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const breed = document.getElementById('breed').value;
    const photo = document.getElementById('photo').value;
    const description = document.getElementById('description').value;

    cats.push({ name, age, breed, photo, description });

    displayCats();
}

function deleteCat(name) {
    cats = cats.filter(cat => cat.name !== name);

    displayCats();
}

function searchCat() {
    const searchBox = document.getElementById('searchBox').value;
    const searchedCats = cats.filter(cat => cat.name.includes(searchBox));

    displayCats(searchedCats);
}

function displayCats(catArray = cats) {
    const catList = document.getElementById('catList');
    catList.innerHTML = '';

    catArray.forEach(cat => {
        catList.innerHTML += `
            <div class="catProfile">
                <h3>${cat.name}</h3>
                <p>Age: ${cat.age}</p>
                <p>Breed: ${cat.breed}</p>
                <img src="${cat.photo}" alt="${cat.name}">
                <p>${cat.description}</p>
                <button onclick="deleteCat('${cat.name}')">Delete</button>
            </div>
        `;
    });
}

displayCats();