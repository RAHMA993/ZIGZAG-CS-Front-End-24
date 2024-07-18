// Write Function Code Here

function showTypes<t, s = undefined, r = undefined>(valOne?: t, valTwo?: s, valThree?: r): string{
    const resultOne = valOne !== undefined ? valOne : "Nothing" ;
    const resultTwo = valTwo !== undefined ? valTwo : "Nothing" ;
    const resultThree = valThree !== undefined ? valThree : "Nothing" ;
    return `${resultOne} - ${resultTwo} - ${resultThree}`;
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true