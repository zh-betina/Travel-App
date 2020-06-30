import { handleInput } from './handleInput.js';

async function postToServer(url, data){
  const response = await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  try{
    const res = await response.json();
    return res;
  }catch(error){
    console.log('While POSTing, error occured:', error);
  };
};

export { postToServer };
