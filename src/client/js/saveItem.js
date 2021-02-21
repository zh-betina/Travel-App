function saveItem(key, value){

localStorage.setItem(key, JSON.stringify(value));
console.log('saved');

document.getElementById('options-buttons').innerHTML =
`<p>✅ <b>Your trip has been successfully saved.</b> ✅</p>";
<a href="/"><button class="btn">Back to searching</button></a>`;
}

export { saveItem };
