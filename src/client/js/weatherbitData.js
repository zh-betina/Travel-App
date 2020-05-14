import { handleInput } from './handleInput.js';
import { chooseWeatherbitOption } from './chooseWeatherbitOption.js';


async function weatherbitCurrent(url, weatherInfo){

  const response = await fetch(url,{
    method: 'GET',
    mode: 'cors',
    credentials: 'same-origin',
    header: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(weatherInfo);
  });
  try{
    const weatherInfo = await response.json();
    console.log(weatherInfo);
    return weatherInfo;
    
  }

}

function weatherbitFuture(){
  console.log('Weatherbit Future');
}

export { weatherbitCurrent };
export { weatherbitFuture };
