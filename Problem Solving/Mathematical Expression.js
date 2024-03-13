// https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/W


function mathematicalExpression(A, S, B, Q, C) {
    let result = 0;
    switch (S) {
        case '+':
            result = A + B;
            break;
        case '-':
            result = A - B;
            break;
        case '*':
            result = A * B;
            break;
    }
    if (result === C) {
        return 'Yes';
    } else {
        return result;
    }
}

// Example
let A = 2;
let S = '*';
let B = 10;
let Q = '=';
let C = 19;

if (A < 0  || B > 100 || C < -100000 || C > 100000) {
    console.log('Invalid input');
} else {
    console.log(mathematicalExpression(A , S, B, Q, C));
}
