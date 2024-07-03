let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

//Count Numbers 

let numbersCount = 0;
for(let i = 0; i < chars.length; i++){
    if(typeof chars[i] === 'number'){
        numbersCount++ ;
    }
    else
    {
        continue;
    }
}

//Move Numbers to the beginning

let arrnumber = [];
let arrnotnumber = [];

for (let i = 0; i < chars.length; i++) {
    if (typeof chars[i] === 'number') {
        arrnumber.push(chars[i]);
    } else {
        arrnotnumber.push(chars[i]);
    }
}
chars = [...arrnumber, ...arrnotnumber];


//Replace Numbers with Characters

chars.copyWithin(0, numbersCount, numbersCount*2 )
console.log(chars);