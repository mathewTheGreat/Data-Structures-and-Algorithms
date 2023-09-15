function largestOfFour(arr) {
  let arrayOfLargest = [];
  
  for(let i = 0; i < arr.length; i++){
    let largeNumber = arr[i][0];
    for(let j = 0; j < arr[i].length; j++){
      
      if(largeNumber < arr[i][j]) {
        largeNumber = arr[i][j];
      }
        
    }
    arrayOfLargest.push(largeNumber);
  }

  return arrayOfLargest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);