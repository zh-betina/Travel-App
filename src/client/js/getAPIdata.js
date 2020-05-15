import { handleInput } from './handleInput.js'

async function getAPIdata(url, data){
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    try{
      const data = await response.json();
      console.log(data);
      return data;
    }catch(error){
      console.log('When GETting data from the API, an error occured: ', error);
    };
  };

  export { getAPIdata };
