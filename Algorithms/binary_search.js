function binarySearch(arr, no) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === no) {
            return mid; 
        
        } else if (arr[mid] > no) {
            high = mid - 1; 
        
        } else {
            low = mid + 1; 
        }
    }

    return -1; 
}

// Example:
let arr = [0, 1, 5, 8, 15, 17, 23, 27];
let no = 5;
let result = binarySearch(arr, no);

if (result === -1) {
    console.log("Can't find", no);
} else {
    console.log("Index of target:", result);
}
