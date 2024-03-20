//https://www.codewars.com/kata/5bb904724c47249b10000131



function calcPoints(matches) {
    var total = 0;
    for (let i = 0; i < matches.length; i++) {
        let [x, y] = matches[i].split(":");
        if (x > y) {
            total += 3;
        } else if (x === y) {
            total += 1;
        }
    }
    return total;
}

// Example usage:
let matches = ["3:1", "2:2", "0:1", "4:0", "1:1", "2:3", "1:0", "0:0", "3:2", "4:4"];
console.log(calcPoints(matches)); 
