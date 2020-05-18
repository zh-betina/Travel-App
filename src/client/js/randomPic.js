import { handleInput } from './handleInput.js';

function randomPic(picData, dataSet){

const picNumber = picData.hits.length;
let i = Math.floor((Math.random() * picNumber) + 1);
dataSet.picUrl = picData.hits[i].webformatURL;

return dataSet;
}

export { randomPic };
