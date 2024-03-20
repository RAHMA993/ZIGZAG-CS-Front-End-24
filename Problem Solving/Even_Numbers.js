// https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/B

function evenNumbers(num) {
    let foundnum = false;

    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i);
            foundnum = true;
        }
    }

    if (!foundnum) {
        return -1;
    }
}

// Example
evenNumbers(2);
