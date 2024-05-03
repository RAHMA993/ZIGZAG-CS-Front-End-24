let isValid = false;

// THE INPUT VALUES
let dayIn = document.querySelector("#day");
let monthIn = document.querySelector("#month");
let yearIn = document.querySelector("#year");

// THE OUTPUT VALUES
let dayOut = document.querySelector("#dayOut");
let monthOut = document.querySelector("#monthOut");
let yearOut = document.querySelector("#yearOut");

// THE ERROR VALUES
let errorDay = document.querySelector("#errorDay");
let errorMonth = document.querySelector("#errorMonth");
let errorYear = document.querySelector("#errorYear");

// THE BUTTON
let submitBtn = document.querySelector(".btn");

submitBtn.addEventListener("click", calculateAge);

dayIn.addEventListener("input", (e) => {
    if (+dayIn.value > 31) {
        errorDay.textContent = "Must be a valid day";
        isValid = false;
        document.querySelector("#label1").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#day").style.borderColor = "hsl(0, 100%, 67%)";

        return;
    } else if (+dayIn.value === 0) {
        errorDay.textContent = "This field is required";
        document.querySelector("#label1").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#day").style.borderColor = "hsl(0, 100%, 67%)";
        isValid = false;
        return;
    } else {
        errorDay.textContent = "";
        isValid = true;
    }
});


monthIn.addEventListener("input", (e) => {
    if (+monthIn.value > 12) {
        errorMonth.textContent = "Must be a valid month";
        document.querySelector("#label2").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#month").style.borderColor = "hsl(0, 100%, 67%)";

        isValid = false;
        return;
    } else {
        isValid = true;
        errorMonth.textContent = "";
    }
    if (+monthIn.value === 0) {
        isValid = false;
        errorMonth.textContent = "This field is required";
        document.querySelector("#label2").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#month").style.borderColor = "hsl(0, 100%, 67%)";
        isValid = false;
        return;
    } else {
        errorMonth.textContent = "";
    }
});

yearIn.addEventListener("input", (e) => {
    if (+yearIn.value > 2023) {
        errorYear.textContent = "Must be a valid year";
        document.querySelector("#label3").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#year").style.borderColor = "hsl(0, 100%, 67%)";

        isValid = false;
        return;
    } else {
        isValid = true;
        errorYear.textContent = "";
    }
    if (+yearIn.value === 0) {
        isValid = false;
        errorYear.textContent = "This field is required";
        document.querySelector("#label3").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#year").style.borderColor = "hsl(0, 100%, 67%)";
        isValid = false;
        return;
    } else {
        errorYear.textContent = "";
    }
});


function calculateAge() {

    let currentYear = new Date().getUTCFullYear();
    let currentMonth = new Date().getUTCMonth() + 1;
    let currentDay = new Date ().getUTCDate();

    if (isValid) {
        let inputYear = parseInt(yearIn.value);
        let inputMonth = parseInt(monthIn.value);
        let inputDay = parseInt(dayIn.value);

        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().getMonth() + 1;
        let currentDay = new Date().getDate();

        let ageYears = currentYear - inputYear;
        let ageMonths = currentMonth - inputMonth;
        let ageDays = currentDay - inputDay;

        if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
            ageYears--;
            ageMonths += 12;
        }
        if (ageDays < 0) {
            let prevMonthLastDay = new Date(currentYear, currentMonth - 1, 0).getDate();
            ageDays += prevMonthLastDay;
            ageMonths--;
        }
        dayOut.textContent = ageDays;
        monthOut.textContent = ageMonths;
        yearOut.textContent = ageYears;
    } else {
        alert("ERROR");
    }
}
