function clickEvent(){
  const input1 = document.getElementsByClassName('input')[0].value;
  const input2 = document.getElementsByClassName('input')[1].value;
    if(input1 && input2 !== ""){
      return handleInput();
    }else{
      location.reload();
      return;
  }
};

let dataSet = {};

function handleInput(){

let geonamesRes;
let weatherData;
let picData;
let placeName = document.getElementById('place').value;
placeName = placeName.replace(/ /g, '+');
const date = document.getElementById('date').value;
const geonamesUrl = `https://secure.geonames.org/searchJSON?q=${placeName}&maxRows=1&username=zh.betina`;
placeName = placeName.replace(/\+/g, ' ');
dataSet = {
  'city': placeName,
  'date': date
};
getAPIdata(geonamesUrl, geonamesRes)
.then(geonamesRes=> {
  console.log(geonamesRes);
  document.getElementById('plan-trip-section').classList.add('hidden');
  document.getElementById('loader').classList.remove('hidden');
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
  return dataSet;
})
.then(dataSet=> {
  const coord = `lat=${dataSet.lat}&lon=${dataSet.lng}`;
  const key = `&key=8b8571fff1e64adeab1381af83e01d85`;
  const urlCurrent = `https://cors-anywhere.herokuapp.com/https://api.weatherbit.io/v2.0/current?${coord}${key}`;
  const urlFuture = `https://cors-anywhere.herokuapp.com/https://api.weatherbit.io/v2.0/forecast/daily?${coord}${key}`;
  if(dataSet.daysDiff<=14 && dataSet.daysDiff>=0){
    return getAPIdata(urlCurrent, weatherData);
  } else {
    return getAPIdata(urlFuture, weatherData);
  }
})
.then(weatherData=>{
  if(weatherData.data.length !=0){
    return longTermWeather(weatherData, dataSet);
  }else{
    dataSet.weather = weatherData.data[0].weather.description;
    dataSet.temp = weatherData.data[0].temp;
    return dataSet;
}
})
.then(dataSet=>{
  let urlPixabay;
  const key = 'key=16579484-c9f74c18198f80193bbad71c6';
  urlPixabay = `https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?${key}&q=${dataSet.city}`;
return getAPIdata(urlPixabay, picData);
})
.then(picData=>{
return randomPic(picData, dataSet);
})
.then(dataSet=>{
let url;
let data;
return postToServer(url = '/post', data = {dataSet});
})
.then(res=>{
return displayResult(res, dataSet);
});
};



import { getAPIdata } from './getAPIdata.js';
import { daysDiff } from './daysDiff.js';
import { longTermWeather } from './longTermWeather.js';
import { randomPic } from './randomPic.js';
import { postToServer } from './postToServer.js';
import { displayResult } from './displayResult.js';


export { clickEvent }
export { handleInput }
export { dataSet }
