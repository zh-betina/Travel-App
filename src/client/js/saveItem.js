import { saveTrip } from './saveTrip.js';

function saveItem(key, value){

localStorage.setItem(key, JSON.stringify(value));
console.log('saved');

}

export { saveItem };
