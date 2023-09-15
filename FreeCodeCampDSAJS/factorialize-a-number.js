function factorialize(num) {
  let factorial = 1;
  while(num !==0){
    factorial *= num;
    num--;
  }
  return factorial;
}

factorialize(5);