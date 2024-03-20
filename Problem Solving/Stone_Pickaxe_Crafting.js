//https://www.codewars.com/kata/65c0161a2380ae78052e5731


function stonePick(arr) {
    let cobblestones = 0;
    let sticks = 0;

    for (let item of arr) {
        switch (item) {
            case 'Cobblestone':
                cobblestones++;
                break;
            case 'Sticks':
                sticks++;
                break;
            case 'Wood':
                sticks += 4;
                break;
            default:
                break;
        }
    }

    return Math.min(Math.floor(cobblestones / 3), Math.floor(sticks / 2));
}

//Example

console.log(stonePick(["Sticks", "Sticks", "Cobblestone", "Cobblestone", "Cobblestone"])); 

console.log(stonePick(["Wood", "Cobblestone", "Cobblestone", "Cobblestone"])); 

console.log(stonePick([])); 

console.log(stonePick(["Sticks", "Wool", "Cobblestone"]));

console.log(stonePick(["Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Wood"])); 

