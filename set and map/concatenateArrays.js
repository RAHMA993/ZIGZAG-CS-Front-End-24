let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

//First 
let arr1 = [...numsOne, ...numsTwo];
console.log("First:");
console.log(arr1);

//Second
let arr2 = numsOne.concat(numsTwo);
console.log("Second:");
console.log(arr2);

//Third
numsOne.push(...numsTwo);
console.log("Third:");
console.log(numsOne);


