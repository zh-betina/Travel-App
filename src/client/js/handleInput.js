
function clickEvent(){
  handleInput();
  };

function handleInput(){

const dataArray = [];
let geonamesRes;
let weatherData;
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
  daysDiff(dataArray, getNowDate);
  return dataArray;
})
.then(dataArray=> {
  const coord = `lat=${dataArray[3]}&lon=${dataArray[4]}`;
  const key = `&key=8b8571fff1e64adeab1381af83e01d85`;
  const urlCurrent = `https://api.weatherbit.io/v2.0/current?${coord}${key}`;
  const urlFuture = `https://api.weatherbit.io/v2.0/forecast/daily?${coord}${key}`;
  let weatherArray = [];
  if(dataArray[5]<=7 && dataArray[5]>=0){
    return getAPIdata(urlCurrent, weatherData).then(weatherData=>{
      sortWeatherData(weatherData, weatherArray);
    });
  } else {
    return getAPIdata(urlFuture, weatherData).then(weatherData=>{
      sortWeatherData(weatherData, weatherArray);
    });
  };
})
.then(dataArray=>{
  console.log('THE END');
});
};



import { getAPIdata } from './getAPIdata.js';
import { daysDiff } from './daysDiff.js';
import { sortWeatherData } from './sortWeatherData.js';

export { clickEvent }
export { handleInput }
