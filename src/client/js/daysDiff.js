import { handleInput } from './handleInput.js';
import { getAPIdata } from './getAPIdata.js';

function daysDiff(dataArray, getNowDate){

const tripDate = new Date(dataArray[1]);
const dateDiff = Math.abs(tripDate - getNowDate);
const daysDiff = Math.round(dateDiff/(1000*60*60*24));
dataArray.push(daysDiff);

};

export { daysDiff };
