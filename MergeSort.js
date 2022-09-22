/*
O(n log n)
*/

function Merge(left, rigth){
    let sortedArray = []

    while(left.length && rigth.length) {
        if(left[0] < rigth[0]) {
            sortedArray.push(left.shift())
        }else {
            sortedArray.push(rigth.shift())
        }
    }
    return [...sortedArray, ...left, ...rigth]
}


function MergeSort(arr) {

    if(arr.length <= 1) return arr
    
    var midArr = Math.floor(arr.length/2)
    
    var left = MergeSort(arr.slice(0, midArr))
    var right = MergeSort(arr.slice(midArr))
    
    return Merge(left, right)
}

console.log(MergeSort([6, 7, 3, 5, 9, 0, 1]))