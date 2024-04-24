function mergeSort (arr){
    if (arr.length <= 1){
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice (0 , mid);
    const rightArr = arr.slice (mid);

    return merge (mergeSort(leftArr) , mergeSort(rightArr));
}

function merge (arrLeft , arrRight){
    const n1 = arrLeft.length;
    const n2 = arrRight.length;
    let mergeArr = []
    let i = 0;
    let j = 0;
    let k = 0;


    while( i < n1 && j < n2 ){
        if( arrLeft[i] < arrRight[j] ){
            mergeArr[k++] = arrLeft[i++]
        }
        else {
            mergeArr[k++] = arrRight[j++]
        }
        
    }
    while ( i < n1 ){
        mergeArr[k++] = arrLeft[i++]
    }
    while ( j < n2 ){
        mergeArr[k++] = arrRight[j++]
    }
    return mergeArr;
}


//Example:
const arr = [5, 3, 8, 4, 2, 7, 1, 6, 7];

console.log("Original array:", arr);
console.log("Sorted array:", mergeSort(arr));