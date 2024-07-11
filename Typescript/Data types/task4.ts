function yesOrNo(val: number ) : "True" | "False" | "Error" {
    if(typeof val === "number" && val > 10){
        return "True";
    }if (typeof val === "number" && val < 10) {
        return "False";
    }else{
        return "Error";
    }
}


  // Do Not Edit Here
  console.log(yesOrNo("100")); // Error
  console.log(yesOrNo(30)); // True
  console.log(yesOrNo(8)); // False