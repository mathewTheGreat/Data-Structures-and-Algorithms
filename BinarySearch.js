

/*
Time complexity: O(logN)
1.BASE CONDITION: If starting index is greater than ending index return false.
2.Compute the middle index.
3.Compare the middle element with number x. If equal return true.
4.If greater, call the same function with ending index = middle-1 and repeat step 1.
5.If smaller, call the same function with starting index = middle+1 and repeat step 1.
*/

const binarySearch = (array, target) => {
    let startingIndex = 0;
    let endingIndex = array.length -1;

    while(startingIndex <= endingIndex) {
        let middleIndex = Math.floor((startingIndex + endingIndex)/2);
        
        if(target === array[middleIndex]) {
            return console.log(target + " at position " + middleIndex);
        }
    
        if(target > array[middleIndex]) {
            console.log("Searching the right side of the array...");
            startingIndex = middleIndex + 1;
        }
    
        if(target < array[middleIndex]) {
            console.log("Searching the leftt side of the array...");
            startingIndex = middleIndex - 1;
        }else {
            console.log("Not found in this Iteration, looping again(recursive)");
        }
    }

    console.log("Target not found in the array.");
} 

var arr = [1, 2, 3, 4, 5];
var tar = 6;

binarySearch(arr, tar);