function displayTrips(){

const tripsDiv = document.getElementById('trips');

let storageObject = {};
let tripsArray = [];
manageData(storageObject, tripsArray);

for(let i = 0; i <= tripsArray.length-1; i++){
  let newEl = document.createElement('div');
  newEl.classList.add('bgr-box');

  let contentDest = tripsArray[i].destination;
  let contentPic = tripsArray[i].photo;
  let contentWeather = tripsArray[i].weather;
  let contentHotels = tripsArray[i].hotels;
  newEl.innerHTML = `<p>${contentDest}</p>
  ${contentPic}
  <p>${contentWeather}</p>
  <div class="hotels">
  <p>${contentHotels}</p>
  </div>`;
tripsDiv.appendChild(newEl);
};
const tripsDivContent = tripsDiv.innerHTML;
tripsDiv.innerHTML = tripsDivContent.replace(/\n/g, '<br />');

console.log('done');
};

//Get from local storage only necessary items:
function manageData(storageObject, tripsArray){

  for(let i = 0; i <= localStorage.length + 1; i++){
    let key = localStorage.key(i);
    let item = localStorage.getItem(key);
    storageObject = {
      [key]: item
    }

    let containsString = Object.keys(storageObject).some(key=>{
      return /tripInfo/.test(key);
    });

    if(containsString == true){
      tripsArray.push(JSON.parse(item));
    }
  };
  return tripsArray;
};

export { displayTrips };
