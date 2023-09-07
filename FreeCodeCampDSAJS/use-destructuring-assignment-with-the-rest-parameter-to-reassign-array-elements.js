function removeFirstTwo(list) {
  let a; 
  let b;
  [a, b, ...list] = list
  return list;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);