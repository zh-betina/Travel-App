import { handleInput } from './handleInput.js';
import { getAPIdata } from './getAPIdata.js';

function chooseWeatherbitOption(dataArray, getNowDate){

let weatherData;
const coord = `lat=${dataArray[3]}&lon=${dataArray[4]}`;
const key = `&key=8b8571fff1e64adeab1381af83e01d85`;
const urlCurrent = `https://api.weatherbit.io/v2.0/current?${coord}${key}`;
const urlFuture = `https://api.weatherbit.io/v2.0/forecast/daily?${coord}${key}`;

const tripDate = new Date(dataArray[1]);
const dateDiff = Math.abs(tripDate - getNowDate);
const daysDiff = Math.round(dateDiff/(1000*60*60*24));
dataArray.push(daysDiff);

  if(daysDiff<=7 && daysDiff >=0){
    getAPIdata(urlCurrent, weatherData);
  } else {
    getAPIdata(urlFuture, weatherData);
  }

return dataArray;
};

export { chooseWeatherbitOption };
