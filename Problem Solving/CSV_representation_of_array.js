//https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036


function createCSV(arr) {
    return arr.join("\n");
}

// Example 
let data = [[ [ 0, 1, 2, 3, 4 ],
                [ 10,11,12,13,14 ],
                [ 20,21,22,23,24 ],
                [ 30,31,32,33,34 ]]];

console.log(createCSV(data));
