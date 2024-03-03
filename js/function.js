function createCard(country) {
    return `
            <div class="card"">
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

export { createCard };