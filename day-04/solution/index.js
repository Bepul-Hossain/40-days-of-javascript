// <!-- # Tasks
// Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

// > **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

// ## 1. What will be the output of this code snippet and why?
//  ```js
//  let day = "Monday";

// switch (day) {
//     case "monday":
//         console.log("It's the start of the week.");
//         break;
//     default:
//         console.log("It's a normal day.");
// }
// ```
// output: It's a normal day. 
// Because day = "Monday" but case is "monday" so default case executed. switch case is case sencetive.

// ## 2. Build an ATM Cash Withdrawal System
// Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

let withdrawalAmmount = 500;
let currentBalance = 900;

if (currentBalance >= withdrawalAmmount && withdrawalAmmount % 4 !== 0) {
    console.log("Invalid amount");
} else {
    console.log("Withdrawal successfull");
}

// ## 3. Build a Calculator with switch-case
// Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

let sum = 0;
let a = 5;
b = 10;
let operator = '+';
switch(operator){   
    case '+':
        sum = a + b;
        break;
    case '-':
        sum = a -b;
        break;
    case '/':
        sum = a/b;
        break;
    case '%':
        sum = a %b;
        break;
    default: 
        console.log("Other operator");
}

console.log(sum);


// ## 4. Pay for your movie ticket
// Imagine, the INOX charges ticket prices based on age:
// - Children (<18 years): $3
// - Adults (18 - 60 years): $10
// - Seniors (60+ years): $8

// Write a program that prints the ticket price based on the person’s age.

let age = 45
if(age>60){
    console.log("Seniors: ", 8);
}else if(age<60 && age>=18){
    console.log("adults: ", 10);
}else if(age<18){
    console.log("Child", 3);
}

// ## 5. Horoscope Sign Checker
// Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.

const zodiac = [
  "",           
  "Capricorn",  
  "Aquarius",   
  "Aries",      
  "Taurus",     
  "Gemini",     
  "Cancer",     
  "Leo",        
  "Virgo",      
  "Libra",      
  "Scorpio",    
  "Sagittarius",
  "Capricorn"   
];
const birthMonth = 4; // 1 based index
const zodiacSign = zodiac[birthMonth];

console.log(`month ${birthMonth}, zodiac sign ${zodiacSign}.`);

// ## 6. Which Triangle?
// A triangle has 3 sides. A Triangle type is determined by its sides:
// - All sides equal is called, `Equilateral Triangle`.
// - Two sides equal is called, `Isosceles Triangle`.
// - All sides different is called, `Scalene Triangle`.

// Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly. -->

const input1 = prompt('side 1: ')
const input2 = prompt('side 2: ')
const input3 = prompt('side 3: ')
console.log("==========", input1, input2, input3);

if (input1 === input2 && input2 === input3) {
    console.log('Equilateral Triangle');
} else if(input1 === input2 || input2 === input3 || input1 === input3) {
    console.log("Isosceles Triangle");
}else{
    console.log(`scalene Triagle`);
    
}
