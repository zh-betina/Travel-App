import { handleInput } from './handleInput.js'

async function getAPIdata(url, data){
    const response = await fetch(url, {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    try{
      const data = await response.json();
      return data;
    }catch(error){
      console.log('When GETting data from the API, an error occured: ', error);
    };
  };

  export { getAPIdata };
