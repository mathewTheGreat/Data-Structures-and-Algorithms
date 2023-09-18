function titleCase(str) {
  let strArray = str.split(" ");
	let newStr = "";
  for(let i = 0; i < strArray.length; i++ ){
  	 newStr += strArray[i][0].toUpperCase();
    
  	for(let j = 1; j <  strArray[i].length; j++){
    	newStr += strArray[i][j].toLowerCase();
    }
    
    if(i !== strArray.length - 1 ){
    	 newStr += " ";
    }
    
  }
  return newStr;
}

titleCase("I'm a little tea pot");