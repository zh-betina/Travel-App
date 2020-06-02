//Global variables:
let tripsArray = [];

//Functions responsible for trips display in My Trips section:
function displayTrips(){

const tripsDiv = document.getElementById('trips');

let storageObject = {};
manageData(storageObject, tripsArray);

for(let i = 0; i <= tripsArray.length-1; i++){
  let newEl = document.createElement('div');
  newEl.classList.add('trip-box');
  //Getting into the right array:
  let neededData = tripsArray[i][0];
  let parsedAr = JSON.parse(neededData[1]);

  let contentDest = parsedAr.destination;
  let contentPic = parsedAr.photo;
  let contentWeather = parsedAr.weather;
  let contentHotels = parsedAr.hotels;
  newEl.innerHTML = `<p>${contentDest}</p>
  <p>${contentWeather}</p>
  ${contentPic}
  <div class="hotels">
  <p>${contentHotels}</p>
  </div>
  <div class="btns-wrap">
  <button class="btn trip-btn" onclick="return Client.removeEntry(${i})">Remove</button>
  <button class="btn trip-btn"> To-Do List</button>
  </div>`;
tripsDiv.appendChild(newEl);
};
const tripsDivContent = tripsDiv.innerHTML;
tripsDiv.innerHTML = tripsDivContent.replace(/\n/g, '<br />');
};

//Get from local storage only necessary items:
export default function manageData(storageObject, tripsArray){

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
      const entries = Object.entries(storageObject);
      tripsArray.push(entries);
    }
  };
  return tripsArray;
};

export { tripsArray };
export { displayTrips };
