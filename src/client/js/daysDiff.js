function daysDiff(dataSet, getNowDate){

const tripDate = new Date(dataSet.date);
const dateDiff = Math.abs(tripDate - getNowDate);
const daysDiff = Math.round(dateDiff/(1000*60*60*24));
dataSet.daysDiff = daysDiff;

};

export { daysDiff };
