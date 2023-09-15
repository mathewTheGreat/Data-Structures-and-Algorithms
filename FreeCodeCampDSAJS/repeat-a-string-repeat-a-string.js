function repeatStringNumTimes(str, num) {
  let tmp = ""
  for(let i = 0; i < num; i++){
    if(num > 0){
      tmp+=str
    }else {
      tmp = "";
    }
  }
  return tmp;
}

repeatStringNumTimes("abc", 3);