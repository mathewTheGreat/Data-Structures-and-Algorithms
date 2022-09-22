var SpiralTraversal = (matrix) => {
    if(!matrix.length) {
        console.log('hey')
        
    return []
    } 

    let arr = []

    let rowStart = 0
    let colStart = 0
    let colEnd = matrix[0].length-1
    let rowEnd = matrix.length-1

    while(rowStart <= rowEnd && colStart <= colEnd) {

        for(let i = colStart; i <= colEnd; i++) {
            arr.push(matrix[rowStart][i])
        }

        rowStart++

        for(let i = rowStart; i <= rowEnd; i++) {
            arr.push(matrix[i][colEnd])
        }

        colEnd--

        if(rowStart <= rowEnd) {
            for(let i = colStart; i <= colEnd; i++) {
                arr.push(matrix[rowEnd][i])
            }
        }
        
        rowEnd--

        if (colStart <= colEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
               arr.push(matrix[i][colStart]);
            }
        }
        
        colStart++
    }

    return arr
}

m = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15], 
    [16,17,18,19,20], 
    [21, 22, 23, 24,25]
 ]

 console.log(SpiralTraversal(m))