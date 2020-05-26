import { handleInput } from './handleInput.js';

function displayResult(res, dataSet){
// TODO: Go to STYLES and adapt styling for esthetic results display
  let aboutPlace =
  `<div id="dest-info">
    <h2>You're leaving for ${dataSet.city} in ${dataSet.daysDiff} days.</h2>
    <h3>Departure date: ${dataSet.date}</h3>
    <h3>${dataSet.country}</h3>
  </div>
  <div id="results">
    <img id="country-pic" src="${dataSet.picUrl}" alt="Photo of the destination"/>
    <h3>Forecast</h3>
    <div id="weather">
      <p>${dataSet.temp}°C</p>
      <p>${dataSet.weather}</p>
    </div>
    <h2>Top cheapest hotel deals</h2>
    <div id="hotel-deals">
    </div>
    <div id="options-buttons">
      <button id="save" onclick="return Client.saveTrip()">Save this trip</button>
      <button id="cancel" onclick="return Client.cancel()">Cancel</button>
    </div>
  </div>`;
  document.getElementById('main').innerHTML = aboutPlace;


  for(let i = 0; i <= 3; i++){
    if(res[i] == undefined){
      return;
    }else{
    let hotelName = [res[i].hotel.name];
    let deal = [res[i].offers[0].price.total, res[i].offers[0].price.currency];
    let address = `<p>Address: ${res[i].hotel.address.lines[0]}</p>
    <p>Postal code: ${res[i].hotel.address.postalCode}</p>
    <p>${res[i].hotel.address.cityName}</p>`;
    const elContent = `<p>${hotelName}</p>
      <p>Picture here</p>
      <p>${address}</p>
      <p>Average estimated price per night for 1 adult:</p>
      <p>${deal}</p>`;

    let newEl = document.createElement('div');
    newEl.innerHTML = elContent;


    document.getElementById('hotel-deals').appendChild(newEl);
    newEl.classList.add('hotel');
    };
  };
};

export { displayResult };
