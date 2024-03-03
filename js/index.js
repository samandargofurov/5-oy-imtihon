import { createCard } from "./function.js";

const icon = document.querySelector('#icon');
const search = document.querySelector('#search');
const select = document.getElementById('select');
const cards = document.querySelector('#cards');

window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');

    loader.classList.add("loader-hidden");
    loader.addEventListener('transitionend', function () {
        document.body.removeChild("loader")
    })
})

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

icon && icon.addEventListener('click', function (e) {
    e.preventDefault();
    
    
})