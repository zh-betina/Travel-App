const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
//Amadeus API
const Amadeus = require('amadeus');
const amadeus = new Amadeus({
  clientId:'kysMo0J8DtFooMV1c5icr5DLDGn6S7C8',
  clientSecret: 'Q62Z4vend2WULdY1',
  logLevel: 'debug'
});


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('dist'));



app.listen(8081, ()=>{console.log('Running on port 8081')});

app.get('/', (req,res)=>{
  res.sendFile('dist/index.html');
});

app.post('/post', handleData);

function handleData(req, res){

  const tripData = req.body.dataSet;

  amadeus.shopping.hotelOffers.get({
    latitude: tripData.lat ,
    longitude: tripData.lng,
    checkInDate: tripData.date
  })
  .then(response=>{
    res.send(response.data);
  })
  .catch(error=>{
    console.log(error.response);
  });
};


/*amadeus.shopping.hotelOffers.get({
  latitude: ,
  longitude: ,
  checkInDate:
})
.then(response=>{
  console.log(response.body);
  console.log(response.result);
  console.log(response.data);
})
.catch(error=>{
  console.log(error.response);
});*/
