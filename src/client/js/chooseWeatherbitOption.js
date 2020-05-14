import { handleInput } from './handleInput.js';
import { weatherbitCurrent } from './weatherbitData.js';
import { weatherbitFuture } from './weatherbitData.js';

function chooseWeatherbitOption(dataArray, getNowDate){

const coord = `lat=${dataArray[3]}&lon=${dataArray[4]}`;
const key = `&key=8b8571fff1e64adeab1381af83e01d85`;
const url = `https://api.weatherbit.io/v2.0/current?${coord}${key}`;

const tripDate = new Date(dataArray[1]);
const dateDiff = Math.abs(tripDate - getNowDate);
const daysDiff = Math.round(dateDiff/(1000*60*60*24));
dataArray.push(daysDiff);
  if(daysDiff<=7 && daysDiff >=0){
    weatherbitCurrent(url);
  } else {
    weatherbitFuture(url);
  }

return dataArray;
};

export { chooseWeatherbitOption };
