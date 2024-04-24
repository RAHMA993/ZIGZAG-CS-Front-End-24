function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let key = arr[i];

        while (j >= 0 && arr[j] > key) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            j--;
        }
    }
    return arr;
}

// Example:
const arr = [-20, 15, 0, 54, 37, -1];
console.log("Original array:", arr);
console.log("Sorted array:", insertionSort(arr));
