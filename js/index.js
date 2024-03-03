import { createCard } from "./function.js";

const body = document.querySelector('#body');
const icon = document.querySelector('#icon');
const moon = document.querySelector('#moon');
const search = document.querySelector('#search');
const cards = document.querySelector('#cards');
const selectBox = document.querySelector(".select-box");
const selectOption = document.querySelector(".select-option");
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

selectOption && selectOption.addEventListener('click', function() {
    selectBox.classList.toggle('active');
})

optionsList && optionsList.forEach(function(optionsListSingle) {
    optionsListSingle.addEventListener('click', function() {
        text = this.textContent;
        select.value = text;
        selectBox.classList.remove('active');
    })
});

moon && moon.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.style.background = "black";

})