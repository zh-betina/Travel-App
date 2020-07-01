import { displayResult } from './displayResult.js';
import weatherIcon from '../media/weatherIcon.png';

function hotelsEl(res, dataSet, aboutPlace){

    if (res[0] != undefined){
      let loopNb = res.length - 1;
      if(loopNb > 3){
        loopNb = 3
      };
      for(let i = 0; i <= loopNb; i++){
        let hotelName = res[i].hotel.name;
        let deal = `${res[i].offers[0].price.total}, ${res[i].offers[0].price.currency}`;
        let address = `<p class="bold">Address:</p>
        <p>${res[i].hotel.address.lines[0]}</p>
        <span>Postal code: ${res[i].hotel.address.postalCode}, ${res[i].hotel.address.cityName}</span>`;
        const elContent = `<p class="bold">${hotelName}</p>
          <i class="fas fa-h-square"></i>
          <p>${address}</p>
          <p>Average estimated price per night for 1 adult:</p>
          <span class="fas fa-money-check-alt"></span>
          <p>${deal}</p>
          <hr>`

        let newEl = document.createElement('div');
        newEl.innerHTML = elContent;

        document.getElementById('hotel-deals').appendChild(newEl);
        newEl.classList.add('hotel');
      };
    }else{
      return
   };
}

function weatherEl(res, dataSet, aboutPlace, aboutWeather){
  if(dataSet.weather.length == 1){
    return document.getElementById('weather').innerHTML =
    `<h3>Current weather conditions</h3>
    <img id="weather-icon" src="${weatherIcon}" alt="Weather icon"/>
    <p>${dataSet.temp}°C <span class="fas fa-temperature-high"></span></p>
    <p>${dataSet.weather}</p>`;
  } else {
    let newEl = document.createElement('h3');
    newEl.innerHTML = `<h3>16-day period weather conditions</h3>`;
    document.getElementById('weather').appendChild(newEl);
    for(let i = 0; i<=dataSet.weather.length-1; i++){
      let weatherDescr = dataSet.weather[i];
      let temp = dataSet.temp[i];
      let elContent =
      `<img id="weather-icon" src="${weatherIcon}" alt="Weather icon"/>
      <p>${temp}°C <span class="fas fa-temperature-high"></span></p>
      <p>${weatherDescr}</p>
      <hr class="line">`;
      let newEl = document.createElement('div');
      newEl.innerHTML = elContent;
      document.getElementById('weather').appendChild(newEl);
      document.getElementById('weather').classList.add('weather-entries');
    };
  };
};

export { hotelsEl };
export { weatherEl };
