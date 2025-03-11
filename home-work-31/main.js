document.querySelector('#submit').addEventListener('click', async () => {
    const value = document.querySelector('#city').value.trim();
    if(!value) {
        alert('Please enter a city');
        return;
    }

    const weatherContainer = document.querySelector('#weather-information');
    weatherContainer.innerHTML = '<p>Please Wait</p>';

    const weatherData = await getWeatherData(value);

    if(weatherData.cod === '404') {
        weatherContainer.innerHTML = '<p>City not found</p>';
    }else{

        weatherContainer.innerHTML = `
            temp: ${weatherData.main.temp}<br>
            pressure: ${weatherData.main.pressure}<br>
            description: ${weatherData.weather[0].description}<br>
            humidity: ${weatherData.main.humidity}<br>
            speed: ${weatherData.wind.speed}<br>
            deg: ${weatherData.wind.deg}<br>
            icon: <img alt="icon" src="http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png">
        `;
    }
});

async function getWeatherData (value) {

    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
        .then(response => {
            return response.json();
        });

    return data;

}