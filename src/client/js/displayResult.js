import { handleInput } from './handleInput.js';
//import weatherIcon from '../media/weatherIcon.png';
import { hotelsEl, weatherEl} from './hotelWeatherEntries.js';

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
  <div class="box-wrapper">
    <div class="box">
      <div id="results">
        <img id="country-pic" src="${dataSet.picUrl}" alt="Photo of the destination">
        <div class="box-wrapper">
          <div id="weather">
          </div>
        </div>
        <div class="box-wrapper">
          <h3>Top cheapest hotel deals</h3>
          <div id="hotel-deals">
          </div>
        </div>
      </div>
      <div id="options-buttons">
        <button class="btn" id="save" onclick="return Client.saveTrip()">Save this trip</button>
        <a href="/"><button class="btn" id="cancel">Cancel</button></a>
        <button class="btn" id="print" onclick="window.print()">Print</button>
      </div>
    </div>
  </div>`;

document.getElementById('main').innerHTML = aboutPlace;
hotelsEl(res, dataSet, aboutPlace);
weatherEl(res, dataSet, aboutPlace);

};

export { displayResult };
