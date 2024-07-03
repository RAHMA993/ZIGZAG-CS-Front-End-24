//https://elzero.org/javascript-bootcamp-assignments-lesson-from-134-to-146/


let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let re = /^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4})$/ig;
console.log(re.test(ip));