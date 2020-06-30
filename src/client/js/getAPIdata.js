import { handleInput } from './handleInput.js'

async function getAPIdata(url, data){
    const response = await fetch(url, {
      method: 'GET',
      //mode: 'no-cors',
      //credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    });
    try{
      console.log(response);
      console.log(data);
      const data = await response.json();
      return data;
    }catch(error){
      console.log('When GETting data from the API, an error occured: ', error);
    };
  };

  export { getAPIdata };
