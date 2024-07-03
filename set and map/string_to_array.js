let theName = "Elzero";

//First
let arr1 = Array.from(theName);
console.log("First:");
console.log(arr1);

//Second
let arr2 = theName.split('');
console.log("Second:");
console.log(arr2);

//Third
let arr3 = [...theName];
console.log("Third:");
console.log(arr3);

//Fourth
let arr4 = Object.assign([], theName)
console.log("Fourth:");
console.log(arr4);

//Fifth
let arr5 = [... new Set(theName)]
console.log("Fifth:");
console.log(arr5);