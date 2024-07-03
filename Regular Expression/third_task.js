//https://elzero.org/javascript-bootcamp-assignments-lesson-from-134-to-146/

let phone = "+(995)-123 (4567)";
let re = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;
console.log(re.test(phone));
