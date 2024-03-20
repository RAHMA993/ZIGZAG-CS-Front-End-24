//https://www.codewars.com/kata/5865918c6b569962950002a1


function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

// Example 
console.log(countOccurrences("Rahma", "a")); 
console.log(countOccurrences("js", "s")); 
console.log(countOccurrences(" ", "z")); 