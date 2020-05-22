import { handleInput } from './handleInput.js';

function displayResult(res, dataSet){

  let hotelName;
  let address;
  let descr;
  let deal;

  let aboutHotel1 =
  `<h2>You're leaving for ${dataSet.city} in ${dataSet.daysDiff} days.</h2>
  <h3>Departure date: ${dataSet.date}</h3>
  <h3>${dataSet.country}</h3>
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
  <button id="save" onclick="return Client.saveTrip()">Save this trip</button>
  <button id="cancel" onclick="return Client.cancel()">Cancel</button>
  </div>`;
  document.getElementById('main').innerHTML = aboutHotel1;


  for(let i = 0; i <= 3; i++){
    let hotelName = [res[i].hotel.name];
    let address = `<p>${res[i].hotel.address.lines[0]}</p>
    <p>${res[i].hotel.address.postalCode}</p>
    <p>${res[i].hotel.address.cityName}</p>`;

      if(res[i].description==undefined){
        descr = "No description available.";
      }else{
        descr = [res[i].description.text];
      }

    let deal = [res[i].offers[0].price.total, res[i].offers[0].price.currency];
    let newEl = document.createElement('div');
    newEl.innerHTML =
     `<p>${hotelName}</p>
      <p>Picture here</p>
      <p>${descr}</p>
      <p>${address}</p>
      <p>Average estimated price per night for 1 adult:</p>
      <p>${deal}</p>`;
    document.getElementById('hotel-deals').appendChild(newEl);
  };
  return;
};

export { displayResult };
