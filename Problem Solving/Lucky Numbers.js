// https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/M


function luckyNum(A, B) {
    function isLuckyNumber(num) {
        while (num > 0) {
            let luckyNumber = num % 10;
            if (luckyNumber !== 4 && luckyNumber !== 7) {
                return false;
            }
            num = Math.floor(num / 10);
        }
        return true;
    }
    
    let hasLuckyNumber = false;
    
    for (let i = A; i <= B; i++) {
        if (isLuckyNumber(i)) {
            console.log(i);
            hasLuckyNumber = true;
        }
    }
    
    if (!hasLuckyNumber) { 
        return -1;
    }
}

// Example
luckyNum(3, 700);

