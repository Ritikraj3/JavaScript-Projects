const countriesContainer = document.querySelector(".countries-container");
const filterByRegion = document.querySelector('.filter-by-region')
const searchInput = document.querySelector('.search-container Input')

const themeChanger = document.querySelector('.theme-changer')

let allCountriesData


fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    renderCountries(data)
    allCountriesData = data
  });



  filterByRegion.addEventListener('change', (e) => {
    fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
  .then((res) => res.json())
  .then(renderCountries);
  })



  function renderCountries(data) {
    countriesContainer.innerHTML = ''
    data.forEach((country) => {
      // console.log(country);    

      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
      countryCard.href = `./country.html?name=${country.name.common}`
      countryCard.innerHTML = `
    <img src="${country.flags.svg}" alt="${country.name.common} flag">
    <div class="card-text">
        <h3 class="card-title">${country.name.common}</h3>
        <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
        <p><b>Region: </b>${country.subregion}</p>
        <p><b>Capital: </b>${country.capital}</p>
    </div>`;

      countriesContainer.append(countryCard);
    });
  }



searchInput.addEventListener('input', (e) =>{
  const filteredCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
  renderCountries(filteredCountries)
})


// On page load, check localStorage and update body, theme text, and icon
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  themeChanger.innerHTML = `<i class="fa-regular fa-sun"></i> Light Mode`;
} else {
  themeChanger.innerHTML = `<i class="fa-regular fa-moon"></i> Dark Mode`;
}

// Toggle theme and save preference
themeChanger.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    themeChanger.innerHTML = `<i class="fa-regular fa-sun"></i> Light Mode`;
  } else {
    localStorage.setItem('theme', 'light');
    themeChanger.innerHTML = `<i class="fa-regular fa-moon"></i> Dark Mode`;
  }
});