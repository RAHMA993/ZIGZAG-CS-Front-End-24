//https://www.codewars.com/kata/57f222ce69e09c3630000212


function well(x) {
    let goodIdeas = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') {
            goodIdeas++;
        }
    }
    
    if (goodIdeas === 0) {
        return 'Fail!';
    } else if (goodIdeas <= 2) {
        return 'Publish!';
    } else {
        return 'I smell a series!';
    }
}

// Example 
console.log(well(['good', 'bad', 'good'])); 
console.log(well(['bad', 'bad', 'bad'])); 
console.log(well(['good', 'good', 'good', 'bad'])); 