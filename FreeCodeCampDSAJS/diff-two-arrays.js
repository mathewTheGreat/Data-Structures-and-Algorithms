function diffArray(arr1, arr2) {
 
  const diff1 = arr1.filter(item => !arr2.includes(item));
  const diff2 = arr2.filter(item => !arr1.includes(item));
  const newArr =  [...diff1, ...diff2];

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);