import { handleInput } from './handleInput.js'

async function geonamesData(url = geonamesUrl, dataRes){
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataRes)
    });
    try{
      const dataRes = await response.json();
      console.log(dataRes);
      return dataRes;
    }catch(error){
      console.log('When GETting data from Geonames API, an error occured: ', error);
    };
  };

  export { geonamesData };
