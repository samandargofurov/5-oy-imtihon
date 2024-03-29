import { createSlug } from "./function.js";

const body = document.querySelector('#body');
const icon = document.querySelector('#icon');
const moon = document.querySelector('#moon');
const search = document.querySelector('#search');
const card = document.querySelector('#card');
const cards = document.querySelector('#cards');
const select = document.querySelector('#select');
const header = document.querySelector('.header');
const back = document.querySelector('.back');

window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');

    loader.classList.add("loader-hidden");
    loader.addEventListener('transitionend', function () {
        document.body.removeChild("loader")
    })
})

back && back.addEventListener('click', function(e) {
    e.preventDefault();
    let fullUrl = window.location.href;
    let index = fullUrl.search('index');
    let beseUrl = fullUrl.substring(0, index);
    window.location.assign(`${beseUrl}/index.html`);
});

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
        back.style.background = '#000'
        back.style.color = '#000'


        row.style.color = '#fff'
        row.style.background = '#2B3844'

        // hd.style.background = '#2B3844'
        // hd.style.boxShadow = 'none'
        // select.style.boxShadow = 'none'
        // search.style.boxShadow = 'none'
        
    } else {
        document.body.style.background = '#fff'
        document.body.style.color = '#2B3844'
        header.style.background = '#fff'

        icon.innerHTML = `<i id="moon" class="fa-regular fa-moon" style="font-size: 25px;"></i>`

        search.style.background = '#fff'
        searchEngine.style.background = 'white'
        searchEngine.style.color = 'white'
        search.style.color = 'white'
        select.style.background = ''
        select.style.color = '#000'
        back.style.background = '#000'
        back.style.color = '#000'
        p.style.background = '#fff'
        p.style.color = '#000'

        row.style.color = '#000'
        row.style.background = '#fff'

        // search.style.boxShadow = ''
        // select.style.boxShadow = ''
        // hd.style.boxShadow = ''
        // hd.style.zIndex = '2000'

    }
    document.body.classList.toggle("icon");
});



// bitta malumotni olish
card && card.addEventListener('click', () => {
    let card = card.value;
    fetch(
      `https://countries-api-v7sn.onrender.com/countries/slug/${card}`
    )
      .then((data) => data.json())
      .then((data) => {
        hero.innerHTML = "";
        data.data.forEach((slug) => {
          let card = `
                <div class="country">
                    <img src="${slug.img}" alt="flag country">
                    <div class="allInfo">
                        <h3 class="name" style="font-size: 32px;">${slug.name}</h3>
                        <div class="info">
                            <div class="left-side">
                                <div class="first-name"><span>Native Name:</span>${slug.nativeName}</div>
                                <div class="population"><span>Population:</span>${slug.population}</div>
                                <div class="region"><span>Region:</span>${slug.region}</div>
                                <div class="subRegion"><span>Sub Region:</span>${slug.subRegion}</div>
                                <div class="capital"><span>Capital:</span>${slug.capital}</div>
                            </div>
                            <div class="right-side">
                                <div class="domain"><span>Top Level Domain:</span>${topLevelDomain}</div>
                                <div class="currency"><span>Currencies:</span>${slug.Currencies}</div>
                                <div class="language"><span>Languages:</span>${slug.languages}</div>
                            </div>
                        </div>

                        <div class="footer">
                            <h2 class="border-countries">${slug.borderCountries}</h2>
                            <span>${slug}</span>
                            <span>${slug}</span>
                            <span>${slug}</span>
                        </div>
                    </div>
                </div>
            `;
          hero.innerHTML += card;
        });
      })
      .catch((err) => {
        console.log(err);
      });
})