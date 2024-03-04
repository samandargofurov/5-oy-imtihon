import { createCard, createSlug } from "./function.js";

// const body = document.querySelector('#body');
const header = document.querySelector(".header");
// const header2 = document.querySelector("#header");
const icon = document.querySelector('#icon');
// const moon = document.querySelector('#moon');
const search = document.querySelector('#search');
const card = document.querySelector('#card');
// const info = document.querySelector('.info');
// const cardValue = document.querySelector('#card h4');
const cards = document.querySelector('#cards');
const searchEngine = document.querySelector(".search-engine");
const select = document.querySelector('#select');
// const options = document.querySelector(".options");
// const optionsList = document.querySelector(".options li");


// loader
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');

    loader.classList.add("loader-hidden");
    loader.addEventListener('transitionend', function () {
        // document.body.removeChild("loader")
    })
})

// dark mode
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
        search.style.color = '#000'
        select.style.background = ''
        select.style.color = '#000'

        row.style.color = '#000'
        row.style.background = '#fff'
    }
    document.body.classList.toggle("icon");
});

// sahifa yuklanganda
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

// search
search.addEventListener("keyup", function () {
    let value = search.value;
    fetch(
      `https://frontend-mentor-apis-6efy.onrender.com/countries?search=${value}`
    )
      .then((res) => res.json())
      .then((data) => {
        cards.innerHTML = "";
        data.data.forEach((country) => {
          let card = `
          <div id="card" class="card" data-id="${country.area}">
            <img src="${country.flags.png}" alt="Flag photo">
            <div class="info">
                <h4 id="name">${country.name.common}</h4>
                <p><span>Population:</span> ${country.population.toLocaleString("en-IN")}</p>
                <p><span>Region:</span> ${country.region}</p>
                <p><span>Capital:</span> ${country.capital}</p>
            </div>
        </div>
      `;
          cards.innerHTML += card;
        });
      })
      .catch((err) => {
        console.log(err);
      });
});

// filter
select.addEventListener("change", () => {
    let value = select.value;
    fetch(`https://countries-api-v7sn.onrender.com/countries?region=${value}`)
      .then(res => res.json())
      .then((data) => {
            search.innerHTML = "";
        data.data.forEach(country => {
            let card = createCard(country)
            search.innerHTML += card;
        });
      })
});


// bitta malumotni olish
// card && card.addEventListener('click', () => {
//     let card = card.value;
//     fetch(
//       `https://countries-api-v7sn.onrender.com/countries/slug/${card}`
//     )
//       .then((data) => data.json())
//       .then((data) => {
//         data.data.forEach((slug) => {
//           let card = `
//                 <div class="country">
//                     <img src="${slug.img}" alt="flag country">
//                     <div class="allInfo">
//                         <h3 class="name" style="font-size: 32px;">${slug.name}</h3>
//                         <div class="info">
//                             <div class="left-side">
//                                 <div class="first-name"><span>Native Name:</span>${slug.nativeName}</div>
//                                 <div class="population"><span>Population:</span>${slug.population}</div>
//                                 <div class="region"><span>Region:</span>${slug.region}</div>
//                                 <div class="subRegion"><span>Sub Region:</span>${slug.subRegion}</div>
//                                 <div class="capital"><span>Capital:</span>${slug.capital}</div>
//                             </div>
//                             <div class="right-side">
//                                 <div class="domain"><span>Top Level Domain:</span>${topLevelDomain}</div>
//                                 <div class="currency"><span>Currencies:</span>${slug.Currencies}</div>
//                                 <div class="language"><span>Languages:</span>${slug.languages}</div>
//                             </div>
//                         </div>

//                         <div class="footer">
//                             <h2 class="border-countries">${slug.borderCountries}</h2>
//                             <span>${slug}</span>
//                             <span>${slug}</span>
//                             <span>${slug}</span>
//                         </div>
//                     </div>
//                 </div>
//             `;
//           hero.innerHTML += card;
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
// })


card && card.addEventListener('click', () => {
    window.location.assign(`http://127.0.0.1:5500/pages/countriesSlug.html`)
})