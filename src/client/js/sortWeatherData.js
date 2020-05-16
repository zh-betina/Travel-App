import { handleInput } from './handleInput.js';

function sortWeatherData(weatherData, weatherArray){

  weatherArray.push(weatherData.data[0].city_name);
  weatherArray.push(weatherData.data[0].weather.description);
  weatherArray.push(weatherData.data[0].temp);

  console.log(weatherArray);
  return weatherArray;
};

export { sortWeatherData };
