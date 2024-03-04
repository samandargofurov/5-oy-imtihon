function createCard(country) {
    return `
            <div id="card" class="card">
                <img src="${country.flags.png}" alt="Flag picture">

                <div class="info">
                    <h4 id="name">${country.name.common}</h4>
                    <p><span>Population:</span> ${country.population.toLocaleString("en-IN")}</p>
                    <p><span>Region:</span> ${country.region}</p>
                    <p><span>Capital:</span> ${country.capital}</p>
                </div>
            </div>
        `;
}

function createSlug(slug) {
    return `
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
    `
}

export { createCard, createSlug };