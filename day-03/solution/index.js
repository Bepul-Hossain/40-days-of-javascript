// # Tasks
// Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

// > **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

// ## 1. Odd or Even?
//  - [ ] Take a number and find if the number is an odd or even number.
//  - [ ] Print the number and result in the console.

const num = 20;

if (num % 2 == 0) {
    console.log('Even Number');
} else {
    console.log("Odd Number");

}

// ## 2. Do you have a Driving License?
// Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

// - [ ] Manage `age` as a variable.
// - [ ] Check if the age is elligible for a driving license and print it on the console accordingly.

let age = 20;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not eligible");

}

// ## 3. Calculate CTC with a Bonus
// Let's calculate how much you earn from your office.

// - [ ] You get 12,300 rupees as your monthly salary.
// - [ ] You get a 20% bonus on your annual salary.
// - [ ] How much money do you make per annum as a CTC?

let monthly = 12300;
let yearly = 12300 * 12;
let annualBonas = yearly * 0.2;
let perAnnum = yearly + annualBonas;
console.log("CTC: ", perAnnum);

// ## 4. Write a program for the Traffic Light Simulation.
// Red Light... Green Light... Let's Play!

// - [ ] Create a `color` variable.
// - [ ] Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.

let color = 'Red';
if (color === 'Red') {
    console.log("STOP");
} else if (color === 'Green') {
    console.log('GO');
}

// ## 5. Create an Electricity Bill Calculator
// Let's calculate how much you pay for electricity bills per month and annually.

// - [ ] Create a `units` variable. Based on this value you will calculate the total electricity bill for a months.
// - [ ] If each day you consume the `units` and each unit cost 150 rupees, how much will you be charged per month?
// - [ ] If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

let units = 4;
let eachDayCost = units * 150;
let monthlyCost = eachDayCost * 30;
let annualPayment = monthlyCost * 12;
let discountAmmount = annualPayment * 0.20;
let annualpayableAmmount = annualPayment - discountAmmount;
console.log(annualpayableAmmount);

// ## 6. Leap Year Checker
// Is 2025 a Leap Year?

// - [ ] Take `year` as input.
// - [ ] Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

let year = 2025

if (year % 400 === 0 || (year % 4 === 0 && year % 400 !== 0)) {
    console.log('Yes');
} else {
    console.log('No');
}

// ## 7. Max of Three Numbers
// Find the max number from the lot.

// - [ ] Take three numbers and assign them to variables p, q, and r.
// - [ ] Now find the maximum of these three numbers using the comparison operators.

let p = 5, q = 10, r = 15;
const max = p > q ? (p > r ? p : r) : (q > r ? q : r);
console.log(max);


// ## 8. Bitwise Doubling
// A tricky one for you

// - [ ] Create a variable `count` and assign  a value, say, 5.
// - [ ] Now use the Bitwise shift operator to make the number double.
// - [ ] Print it on the console.

let count = 5
const double = count<<1;
console.log(double);
