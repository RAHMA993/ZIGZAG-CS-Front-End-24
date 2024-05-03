// https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/R



function calcAge(num) {

    var years = Math.floor(num / 365);
    var months = Math.floor((num % 365) / 30);
    var days = num - (years * 365 + months * 30);

    console.log(years + " Years");
    console.log(months + " Months");
    console.log(days + " Days");
}

// Example

let num = 30;
calcAge(num);