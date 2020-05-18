function clickEvent(){
  handleInput();
  };

function handleInput(){

let dataSet = {};
let geonamesRes;
let weatherData;
const placeName = document.getElementById('place').value;
const date = document.getElementById('date').value;
const geonamesUrl = `http://api.geonames.org/searchJSON?q=${placeName}&maxRows=1&username=zh.betina`;
dataSet = {
  'city': placeName,
  'date': date
};
getAPIdata(geonamesUrl, geonamesRes)
.then(geonamesRes=> {
  const lat = geonamesRes.geonames[0].lat;
  const lng = geonamesRes.geonames[0].lng;
  const country = geonamesRes.geonames[0].countryName;
  dataSet.country = country;
  dataSet.lat = lat;
  dataSet.lng = lng;
  return dataSet;
})
.then(dataSet=> {
  const getNowDate = new Date();
  daysDiff(dataSet, getNowDate);
  console.log(dataSet);
  return dataSet;
})
.then(dataSet=> {
  const coord = `lat=${dataSet.lat}&lon=${dataSet.lng}`;
  const key = `&key=8b8571fff1e64adeab1381af83e01d85`;
  const urlCurrent = `https://api.weatherbit.io/v2.0/current?${coord}${key}`;
  const urlFuture = `https://api.weatherbit.io/v2.0/forecast/daily?${coord}${key}`;
  if(dataSet.daysDiff<=7 && dataSet.daysDiff>=0){
    return getAPIdata(urlCurrent, weatherData);
  } else {
    return getAPIdata(urlFuture, weatherData);
  }
})
.then(weatherData=>{
  dataSet.weather = weatherData.data[0].weather.description;
  dataSet.temp = weatherData.data[0].temp;
  console.log(dataSet);
})
.then(dataSet=>{
  
})
};



import { getAPIdata } from './getAPIdata.js';
import { daysDiff } from './daysDiff.js';
import { sortWeatherData } from './sortWeatherData.js';

export { clickEvent }
export { handleInput }
