import { saveTrip } from './saveTrip.js';

function saveItem(key, value){

localStorage.setItem(key, JSON.stringify(value));
const data = JSON.parse(localStorage.getItem(key));

data.forEach(key=>{
  console.log("works");
})

}

export { saveItem };
