const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('dist'));

app.listen(8081, ()=>{console.log('Runnin on port 8081')});

app.get('/', (req,res)=>{
  res.sendFile('dist/index.html');
});
