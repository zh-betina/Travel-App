
function clickEvent(){
  handleInput();
  };

function handleInput(){

const dataArray = [];
let geonamesRes;

const placeName = document.getElementById('place').value;
const date = document.getElementById('date').value;
const geonamesUrl = `http://api.geonames.org/searchJSON?q=${placeName}&maxRows=1&username=zh.betina`;
dataArray.push(placeName, date);
getAPIdata(geonamesUrl, geonamesRes)
.then(geonamesRes=> {
  const lat = geonamesRes.geonames[0].lat;
  const lng = geonamesRes.geonames[0].lng;
  const country = geonamesRes.geonames[0].countryName;
  dataArray.push(country, lat, lng);
  return dataArray;
})
.then(dataArray=> {
  const getNowDate = new Date();
  chooseWeatherbitOption(dataArray, getNowDate);
})
};



import { getAPIdata } from './getAPIdata.js';
import { chooseWeatherbitOption } from './chooseWeatherbitOption.js'

export { clickEvent }
export { handleInput }
