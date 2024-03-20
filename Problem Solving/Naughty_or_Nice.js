//https://www.codewars.com/kata/5662b14e0a1fb8320a00005c


function santaList(data) {
    let naughtyCount = 0;
    let niceCount = 0;

    for (const month in data) {
        for (const day in data[month]) {
            if (data[month][day] === 'Naughty') {
                naughtyCount++;
            } else if (data[month][day] === 'Nice') {
                niceCount++;
            }
        }
    }

    if (naughtyCount > niceCount) {
        return "Naughty!";
    } else if (naughtyCount < niceCount) {
        return "Nice!";
    } else {
        return "Nice!";
    }
}

// Example 
let dataOne = {
   
    "January": {
        "1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", 
        "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", 
        "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", 
        "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", 
        "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", 
        "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", 
        "31": "Naughty"},};
        
        console.log(santaList(dataOne));
        let dataTwo = {
        "February":{
            "1": "Nice", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", 
            "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Nice", "10": "Nice", 
            "11": "Nice", "12": "Nice", "13": "Nice", "14": "Nice", "15": "Naughty", 
            "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Nice", "20": "Nice", 
            "21": "Nice", "22": "Nice", "23": "Nice", "24": "Nice", "25": "Naughty", 
            "26": "Nice", "27": "Naughty", "28": "Nice"}
      
    };
  
console.log(santaList(dataTwo));