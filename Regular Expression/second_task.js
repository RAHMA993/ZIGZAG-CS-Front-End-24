//https://elzero.org/javascript-bootcamp-assignments-lesson-from-134-to-146/

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let re = /os(\d+)?o/ig;
console.log(specialNames.match(re));