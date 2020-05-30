function displayTrips(){

const tripsDiv = document.getElementById('trips');

let storageObject = {};
let tripsArray = [];

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
}
console.log(tripsArray);
};

export { displayTrips };
