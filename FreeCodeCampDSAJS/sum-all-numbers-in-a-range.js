function sumAll(arr) {
  let tmp = 0;
  if(arr[0] < arr[1]) {
    for(let i = arr[0]; i <= arr[1]; i++) {
      tmp += i;
    }
  }else {
    for(let i = arr[0]; i >= arr[1]; i--) {
      tmp += i;
    }
  }
  return tmp;
}

sumAll([1, 4]);