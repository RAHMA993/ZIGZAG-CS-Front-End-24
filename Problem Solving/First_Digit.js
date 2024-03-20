// https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/P


function even(num) {

    var firstDigit = Math.floor(num / 1000);

    if (num >= 1000 && num < 10000) {
        if (firstDigit % 2 === 0) {
            console.log("EVEN");
        } else {
            console.log("ODD");
        }
    } else {
        console.log("Invalid Number");
    }
}

// Example
let num = 4055;
even(num);
