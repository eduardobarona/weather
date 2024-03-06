import { weather_data } from './data.js';

let button = document.getElementById('loadinfo');

let loadDayForecastData = () => {
	let city = document.getElementById('city');
    let cityGuayaquil = weather_data[0].city;

    let fecha = document.getElementById('date');
    let fechaGuayaquil = weather_data[0].date;

    let temperaturaMax = document.getElementById('maxtemperature');
    let temperaturaMaxGuayaquil = weather_data[0].maxtemperature;

    let temperaturaMin = document.getElementById('mintemperature');
    let temperaturaMinGuayaquil = weather_data[0].mintemperature;

    let nubosidad = document.getElementById('cloudiness');
    let nubosidadGuayaquil= weather_data[0].cloudiness;

    let viento = document.getElementById('wind');
    let vientoGuayaquil= weather_data[0].wind;

    let precipitaciones = document.getElementById('rainfall');
    let precipitacionesGuayaquil = weather_data[0].rainfall;

    let lateIcon = document.getElementById('late_icon');
    let lateIconPage = weather_data[0].forecast_today[0].icon;

    let lateTemperature = document.getElementById('late_temperature');
    let lateTemperaturePage = weather_data[0].forecast_today[0].temperature;

    let lateForecast = document.getElementById('late_forecast');
    let lateForecastPage = weather_data[0].forecast_today[0].forecast;

    let lateText = document.getElementById('late_text');
    let lateTextPage = weather_data[0].forecast_today[0].text;

    let nightIcon = document.getElementById('night_icon');
    let nightIconPage = weather_data[0].forecast_today[1].icon;

    let nightTemperature = document.getElementById('night_temperature');
    let nightTemperaturePage = weather_data[0].forecast_today[1].temperature;

    let nightForecast = document.getElementById('night_forecast');
    let nightForecastPage = weather_data[0].forecast_today[1].forecast;

    let nightText = document.getElementById('night_text');
    let nightTextPage = weather_data[0].forecast_today[1].text;
    
    city.innerHTML = `<h5 id="city" class="text-golden">${cityGuayaquil}</h5>`;
    fecha.innerHTML = `<h5 id="date" class="text-golden text-sm  opacity-8 mb-0"> ${fechaGuayaquil} </h5>`;
    temperaturaMax.innerHTML = `<span id="maxtemperature">${temperaturaMaxGuayaquil}</span>`;
    temperaturaMin.innerHTML = `<span id="mintemperature" class="opacity-6 mx-2">${temperaturaMinGuayaquil}</span>`;
    nubosidad.innerHTML = `<h6 id="cloudiness" class="text-golden mb-0">${nubosidadGuayaquil}</h6>`;
    viento.innerHTML = `<h6 id="wind" class="text-golden mb-0">${vientoGuayaquil}</h6>`;
    precipitaciones.innerHTML = `<h6 id="rainfall" class="text-golden mb-0">${precipitacionesGuayaquil}/h6>`;
    lateIcon.innerHTML = `<i id="late_icon" class="material-icons opacity-10">${lateIconPage}</i>`;
    lateTemperature.innerHTML = `<h3 id="late_temperature" class="text-center mb-0">${lateTemperaturePage}</h3>`;
    lateForecast.innerHTML = `<span id="late_forecast" class="text-md">${lateForecastPage}</span>`;
    lateText.innerHTML = `<h4 id="late_text" class="mb-0 text-md">${lateTextPage}</h4>`;
    nightIcon.innerHTML = `<i id="late_icon" class="material-icons opacity-10">${nightIconPage}</i>`;
    nightTemperature.innerHTML = `<h3 id="late_temperature" class="text-center mb-0">${nightTemperaturePage}</h3>`;
    nightForecast.innerHTML = `<span id="late_forecast" class="text-md">${nightForecastPage}</span>`;
    nightText.innerHTML = `<h4 id="late_text" class="mb-0 text-md">${nightTextPage}</h4>`;
};

let loadWeekForecastData = () => {

    for (let index = 0; index < 7; index++) {
        let textDay = document.getElementsByClassName(`dia${index+1}`)[0];
        let dateDay = document.getElementsByClassName(`diaFecha${index+1}`)[0];
        let tempMaxDay = document.getElementsByClassName(`diaTempMax${index+1}`)[0];
        let tempMinDay = document.getElementsByClassName(`diaTempMin${index+1}`)[0];
        let iconDay = document.getElementsByClassName(`diaIcon${index+1}`)[0];

        let daysTextName = weather_data[0].forecast_week[index].text;
        let daysTextDate = weather_data[0].forecast_week[index].date;
        let daysTempMax = weather_data[0].forecast_week[index].temperature.max;
        let daysTempMin = weather_data[0].forecast_week[index].temperature.min;
        let daysIcon = weather_data[0].forecast_week[index].icon;

        textDay.innerHTML = `<h6 class="mb-1 text-dark font-weight-bold text-sm dia${index+1}">${daysTextName}</h6>`;
        dateDay.innerHTML = `<span class="text-xs diaFecha${index+1}">${daysTextDate}</span>`;
        tempMaxDay.innerHTML = `<span class="font-weight-bold text-dark mx-2 diaTempMax${index+1}">${daysTempMax}</span>`;
        tempMinDay.innerHTML = `<span class="text-dark mx-2 diaTempMin${index+1}">${daysTempMin}</span>`;
        iconDay.innerHTML = `<i class="material-icons fs-2 me-1 rainy diaIcon${index+1}">${daysIcon}</i>`;
    };
};


document.addEventListener("DOMContentLoaded", function() {
    // Llamar a la función loadDayForecastData
    loadDayForecastData();
});

button.addEventListener("click", function() {
    // Llamar a la función loadWeekForecastData
    loadWeekForecastData();
});