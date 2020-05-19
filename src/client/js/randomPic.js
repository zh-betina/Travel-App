import { handleInput } from './handleInput.js';
import { getAPIdata } from './getAPIdata.js';

function randomPic(picData, dataSet){

if(picData.hits.length!==0){
  const picNumber = picData.hits.length;
  let i = Math.floor((Math.random() * picNumber) + 1);
  dataSet.picUrl = picData.hits[i].webformatURL;
  return dataSet;
} else {
  const key = 'key=16579484-c9f74c18198f80193bbad71c6';
  let urlPixabay = `https://pixabay.com/api/?${key}&q=${dataSet.country}`;
  picData = undefined;
  return getAPIdata(urlPixabay, picData).then(picData=>{
    return randomPic(picData, dataSet)
  });
};
};

export { randomPic };
