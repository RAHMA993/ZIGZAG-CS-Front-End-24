// https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/K


function minAndMax(A, B, C) {

    let min = A;
    
    if (B < min) {
        min = B;
    }
    if (C < min) {
        min = C;
    }
    
    let max = A;
    if (B > max) {
        max = B;
    }
    if (C > max) {
        max = C;
    }

    console.log(min, max);
}

//Example

minAndMax(-1, -3, -8);
