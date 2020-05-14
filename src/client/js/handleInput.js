
function clickEvent(){
  handleInput();
  };

function handleInput(){

const placeName = document.getElementById('place').value;
console.log(`Place name: ${placeName}`);
const geonamesUrl = `http://api.geonames.org/searchJSON?q=${placeName}&maxRows=1&username=zh.betina`;
console.log(`Url: ${geonamesUrl}`);
geonamesData(geonamesUrl)
.then(dataRes=> {
  console.log(dataRes);
});

};

async function geonamesData(url = geonamesUrl, dataRes){
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataRes)
    });
    try{
      const dataRes = await response.json();
      console.log(dataRes);
      return dataRes;
    }catch(error){
      console.log('When GETting data from Geonames API, an error occured: ', error);
    };
  };

//http://api.geonames.org/searchJSON?q=london&maxRows=1&username=zh.betina
export { clickEvent }
export { handleInput }
export { geonamesData }
