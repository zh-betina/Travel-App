import { handleInput } from './handleInput.js'

async function getAPIdata(url, data){
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    });
    try{
      console.log(response);
      const data = await response.json();
      console.log(data);
      return data;
    }catch(error){
      console.log('When GETting data from the API, an error occured: ', error);
    };
  };

  export { getAPIdata };
