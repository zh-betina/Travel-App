import { handleInput } from './handleInput.js';

function longTermWeather(weatherData, dataSet){

  dataSet.weather = [];
  dataSet.temp = [];

  for(let i = 0; i<=weatherData.data.length-1; i++){
    dataSet.weather.push(weatherData.data[i].weather.description);
    dataSet.temp.push(weatherData.data[i].temp);
  }
  return dataSet;
}


export { longTermWeather };
