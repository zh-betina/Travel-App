import { displayResult } from './displayResult.js';
import { saveItem } from './saveItem.js';

// TODO: Change function name
function saveTrip(){

const hotels = [];
const destination = document.getElementById('dest-info').innerText;
const pic = document.getElementById('country-pic').outerHTML;
const weather = document.getElementById('weather').innerText;
const hotel = document.getElementsByClassName('hotel');

for(let i=0; i<= hotel.length-1; i++){
const hotelText = hotel[i].innerText;
hotels.push(hotelText);
};

let tripInfo = {
  'destination': destination,
  'photo': pic,
  'weather': weather,
  'hotels': hotels
}

let i = localStorage.length;
let key = 'tripInfo'+(i+1);
saveItem(key, tripInfo);

}

export { saveTrip };
