import { handleInput } from './handleInput.js';

function displayResult(res, dataSet){
  let dayS;
    if(dataSet.daysDiff == 1){
      dayS = "day"
    }else{
      dayS = "days"
    };
  let aboutPlace =
  `<div id="dest-info">
    <h2>You're leaving for ${dataSet.city}, ${dataSet.country} in ${dataSet.daysDiff} ${dayS}.</h2>
    <h3>Departure date:</h3>
    <p>${dataSet.date}</p>
  </div>
  <div id="results">
    <img id="country-pic" src="${dataSet.picUrl}" alt="Photo of the destination"/>
    <h3>Forecast</h3>
    <div id="weather">
      <p>${dataSet.temp}°C <span class="fas fa-temperature-high"></span></p>
      <p>${dataSet.weather}</p>
    </div>
    <h3>Top cheapest hotel deals</h3>
    <div id="hotel-deals">
    </div>
    <div id="options-buttons">
      <button class="btn" id="save" onclick="return Client.saveTrip()">Save this trip</button>
      <!-- TODO: change this onclick for sth else (<a>? external function?)-->
      <button class="btn" id="cancel" onclick="window.location='/'">Cancel</button>
    </div>
  </div>`;
  document.getElementById('main').innerHTML = aboutPlace;

  for(let i = 0; i <= 3; i++){
    if(res[i] == undefined){
      return;
    }else{
    let hotelName = [res[i].hotel.name];
    let deal = [res[i].offers[0].price.total, res[i].offers[0].price.currency];
    let address = `<p class="bold">Address:</p>
    <p>${res[i].hotel.address.lines[0]}</p>
    <span>Postal code: ${res[i].hotel.address.postalCode}, ${res[i].hotel.address.cityName}</span>`;
    const elContent = `<p class="bold">${hotelName}</p>
      <i class="fas fa-h-square"></i>
      <p>${address}</p>
      <p>Average estimated price per night for 1 adult:</p>
      <span class="fas fa-money-check-alt"></span>
      <p>${deal}</p>
      <hr>`;

    let newEl = document.createElement('div');
    newEl.innerHTML = elContent;


    document.getElementById('hotel-deals').appendChild(newEl);
    newEl.classList.add('hotel');
    };
  };
};

export { displayResult };
