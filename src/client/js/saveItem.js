import { saveTrip } from './saveTrip.js';

function saveItem(key, value){

localStorage.setItem(key, JSON.stringify(value));
console.log('saved');

document.getElementById('options-buttons').innerHTML =
"✅ <b>Your trip has been successfully saved.</b> ✅";

}

export { saveItem };
