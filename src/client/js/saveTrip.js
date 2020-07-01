import { displayResult } from './displayResult.js';
import { saveItem } from './saveItem.js';

function saveTrip(){

const data = Client.dataSet;
const hotels = [];
const destination = `${data.city}, ${data.country}`;
const pic = document.getElementById('country-pic').outerHTML;
const date = data.date;
const weather = document.getElementById('weather').innerHTML;
const hotel = document.getElementsByClassName('hotel');

for(let i=0; i<= hotel.length-1; i++){
const hotelText = hotel[i].innerHTML;
hotels.push(hotelText);
};

let tripInfo = {
  'destination': destination,
  'date': date,
  'photo': pic,
  'weather': weather,
  'hotels': hotels
}

let i = localStorage.length;
let addToKey = parseInt(i+1);
console.log("addToKey:" addToKey);
let key = 'tripInfo'+ addToKey;
return saveItem(key, tripInfo);

}

export { saveTrip };
