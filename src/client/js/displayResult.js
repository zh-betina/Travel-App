import { handleInput } from './handleInput.js';

function displayResult(res, dataSet){

  let hotelName;
  let address;
  let descr;
  let deal;
  let aboutHotel;


  for(let i = 0; i <= res.length-1; i++){
    let hotelName = [res[i].hotel.name];
    let adress = [res[i].hotel.address.lines[0], res[i].hotel.address.postalCode,
                  res[i].hotel.address.cityName];

      if(res[i].description==undefined){
        descr = "No description available.";
      }else{
        descr = [res[i].description.text];
      }

    let deal = [res[i].offers[0].price.total, res[i].offers[0].price.currency];
  };

  // TODO:
  //Divide the part to iterate from the part not requiring iteration
  aboutHotel = `<div id="results">
  <h2>You're leaving for ${dataSet.city} in ${dataSet.daysDiff} days.</h2>
  <p>Departure date: ${dataSet.date}</p>
  <p>${dataSet.countryName}<p>
  <img id="country-pic" src="${dataSet.picUrl}" alt="Photo of the destination"/>
  <div id="section">
  <h3>Forecast</h3>
  <div id="weather">
  <p>${dataSet.temp}°C</p>
  <p>${dataSet.weather}</p>
  </div>
  <h4>Top cheapest hotel deals</h4>
  <div id="hotel-deals">
  <div class="hotel">
  <p>${hotelName}</p>
  <p>Picture here</p>
  <p>${descr}</p>
  <p>${address}</p>
  <p>Average estimated price per night for 1 adult:</p>
  <p>${deal}</p>
  </div>
  </div>
  </div>
  <button id="save" onclick="return Client.saveTrip()">Save this trip</button>
  <button id="cancel" onclick="return Client.cancel()">Cancel</button>
  </div>`;

  document.getElementById('main').innerHTML = aboutHotel;

  return;
};

export { displayResult };
