const cityForm = document.querySelector('form');

const updateCity = async (city) => {
    // getCity(city).then(data => {
    //     return getWeather(data.Key);
    // }).then(data => {
    //     console.log(data);
    // }).catch(err => console.log(err));

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);
};

cityForm.addEventListener('submit', e => {
    // prevent default 
    e.preventDefault();

    // get city name
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update UI with new city
    updateCity(city);
});

