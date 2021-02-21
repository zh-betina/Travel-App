function removeEntry(i, tripsArray){

let localSt= localStorage.length;
for(let j=0; j<=localSt+1; j++){
  let key = localStorage.key(j);
  let array = Client.tripsArray[i][0][0];
    if(key == array){
      localStorage.removeItem(key);
      return location.reload();
    };
};

}

export { removeEntry };
