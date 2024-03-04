import { createCard } from "./function.js";

const body = document.querySelector('#body');
const header = document.querySelector(".header");
const header2 = document.querySelector("#header");
const icon = document.querySelector('#icon');
const moon = document.querySelector('#moon');
const search = document.querySelector('#search');
const card = document.querySelector('.card');
const info = document.querySelector('.info');
const cardValue = document.querySelector('#card h4');
const cards = document.querySelector('#cards');
const searchEngine = document.querySelector(".search-engine");
const select = document.querySelector('#select');
const options = document.querySelector(".options");
const optionsList = document.querySelector(".options li");

window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');

    loader.classList.add("loader-hidden");
    loader.addEventListener('transitionend', function () {
        document.body.removeChild("loader")
    })
})

icon && icon.addEventListener("click", (e) => {
    e.preventDefault();
    if (icon.classList.toggle("icon")) {
        document.body.style.background = '#2B3844'
        document.body.style.color = '#fff'
        header.style.background = '#2B3844'
        document.body.style.transition = '0.2s'

        icon.innerHTML = `<i class="fa-regular fa-sun" style="font-size: 25px;"></i>`

        search.style.background = '#2B3844'
        searchEngine.style.background = '#2B3844'
        search.style.color = 'white'
        search.style.placeholder = 'white'
        select.style.background = '#2B3844'
        select.style.color = '#fff'

        row.style.color = '#fff'
        row.style.background = '#2B3844'
    } else {
        document.body.style.background = '#fff'
        document.body.style.color = '#2B3844'
        header.style.background = '#fff'

        icon.innerHTML = `<i id="moon" class="fa-regular fa-moon" style="font-size: 25px;"></i>`

        search.style.background = '#fff'
        searchEngine.style.background = 'white'
        searchEngine.style.color = '#000'
        search.style.color = 'white'
        select.style.background = ''
        select.style.color = '#000'

        row.style.color = '#000'
        row.style.background = '#fff'
    }
    document.body.classList.toggle("icon");
});

document.addEventListener('DOMContentLoaded', function() {
    fetch("https://frontend-mentor-apis-6efy.onrender.com/countries", {
        method: "GET"
    })
        .then(res => {
                return res.json();
        })
        .then(data => {
            if (data) {
                data.data.forEach(country => {
                    let row = createCard(country);
                    cards.innerHTML += row
                });
            }
        })
        .catch(error => {
            console.log(error);
        });

});

select.addEventListener('change', function() {
    let amount = select.value

    fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries?region=${amount}`)

    .then(data => data.json())
    .then(data => {
        search.innerHTML = ''
        data.data.forEach((country) => {
            let card = createCard(country)
            main.innerHTML += card
        })
    })
    .catch(error => {
        console.log(error);
    });
})

cards && cards.addEventListener('click', function() {
    fetch("https://frontend-mentor-apis-6efy.onrender.com/countries", {
        method: "GET"
    })
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
})







