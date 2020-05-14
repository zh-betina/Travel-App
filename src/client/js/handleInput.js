
function clickEvent(){
  handleInput();
  };

function handleInput(){

const dataArray = [];

const placeName = document.getElementById('place').value;
const date = document.getElementById('date').value;
const geonamesUrl = `http://api.geonames.org/searchJSON?q=${placeName}&maxRows=1&username=zh.betina`;
dataArray.push(placeName, date);
geonamesData(geonamesUrl)
.then(dataRes=> {
  const lat = dataRes.geonames[0].lat;
  const lng = dataRes.geonames[0].lng;
  const country = dataRes.geonames[0].countryName;
  dataArray.push(country, lat, lng);
  return dataArray;
})
.then(dataArray=> {
  const getNowDate = new Date();
  chooseWeatherbitOption(dataArray, getNowDate);
})
};



import { geonamesData } from './geonamesData.js';
import { weatherbitData } from './weatherbitData.js';
import { chooseWeatherbitOption } from './chooseWeatherbitOption.js'

export { clickEvent }
export { handleInput }
