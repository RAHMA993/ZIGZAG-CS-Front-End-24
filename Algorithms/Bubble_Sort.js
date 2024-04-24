function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


// Example:

const arr = [20, 15, 0, 54, 37, -1];
console.log("Original array:", arr);
console.log("Sorted array:", bubbleSort(arr));