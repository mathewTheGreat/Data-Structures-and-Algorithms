function frankenSplice(arr1, arr2, n) {
  let tmpArray = arr2.slice();
  for(let i = 0; i < arr1.length; i++) {
    tmpArray.splice(n, 0, arr1[i])
    n++;
  }


  return tmpArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);