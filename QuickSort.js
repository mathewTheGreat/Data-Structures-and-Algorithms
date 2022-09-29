const QuickSort = (arr) => {
    if(!arr.length) return arr;
    
    let leftArr = [];
    let rightArr = [];

    let pivot = arr[arr.length - 1];

    for(let i = 0; i < arr.length - 1; i++) {
        arr[i] < pivot ? leftArr.push(arr[i]) : rightArr.push(arr[i])
    }

    return [...QuickSort(leftArr), pivot, ...QuickSort(rightArr)]

}


const items = [1,5,2,99,81,100,144,121,91,85,74,10];
console.log(QuickSort(items));