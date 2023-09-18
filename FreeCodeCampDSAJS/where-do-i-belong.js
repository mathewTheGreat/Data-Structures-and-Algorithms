function getIndexToIns(arr, num) {
  // Use a comparison function to sort the array numerically
  arr.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      continue;
    } else {
      return i;
    }
  }

  // If the loop completes without returning, num should be inserted at the end
  return arr.length;
}

getIndexToIns([5, 3, 20, 3], 5);
