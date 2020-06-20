import { saveTrip } from './saveTrip.js';

function saveItem(key, value){

localStorage.setItem(key, JSON.stringify(value));
console.log('saved');

document.getElementById('options-buttons').innerHTML =
`<p>✅ <b>Your trip has been successfully saved.</b> ✅</p>";
<button class="btn"><a href="/">Back to searching</a></button>`;
}

export { saveItem };
