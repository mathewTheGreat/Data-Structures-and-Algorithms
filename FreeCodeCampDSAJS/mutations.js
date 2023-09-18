function mutation(arr) {
  let firstWord = arr[0].toUpperCase();
  let secondWord = arr[1].toUpperCase();

  for(let i = 0; i < secondWord.length; i++) {

    if(firstWord.indexOf(secondWord[i]) === -1) {
      return false;
    }
  }

  
  return true;
}

mutation(["hello", "hey"]);