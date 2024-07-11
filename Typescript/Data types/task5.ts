type custom = string;
function isHeOld(age: number) : "Yes" | "No" | "Error" {
    if(age > 40){
        return "Yes";
    }if (age < 40) {
        return "No";
    }else{
        return "Error";
    }
}

  // Do Not Edit Here
  console.log(isHeOld("100")); // Error
  console.log(isHeOld(45)); // "Yes"
  console.log(isHeOld(30)); // "No"