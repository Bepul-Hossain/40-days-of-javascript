// # Tasks
// Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

// > **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

// ## 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:

// ```bash
// *
// * *
// * * *
// * * * *
// * * * * *
// ```

for (let i = 0; i < 5; i++) {
    let star = ""
    for (let j = 0; j <= i; j++) {
        star = star + " *"
    }
    console.log(star);
}

// ## 2. Craete Multiplication Table (Using for loop)
// Write a program to print the multiplication table of a given number up to 10.
// For Example: If N = 3, output should be:

// ```bash
// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30
// ```

for (let i = 1; i <= 10; i++) {
    console.log("3 x ", i, " = ", 3 * i);
}

// ## 3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.
let sum = 0;
for (let i = 1; i <= 500; i = i + 2) {
    sum = sum + i;
}
console.log(sum);


// ## 4. Skipping Multiples of 3
// Write a program to print numbers from 1 to 20, but skip multiples of 3.
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}

// ## 5. Reverse Digits of a Number (Using while loop)
// Write a program to reverse the digits of a given number using a while loop.

// Example:

// ```bash
// Input: 6789
// Output: 9876
// ```

let output = 0;
let n = 6789;
while (n > 0) {
    output = (output * 10) + n % 10
    n = parseInt(n / 10);
}
console.log(output);


// ## 6. Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.

for(initialization; condition; updateConditionValue){
    //code
}
while (condition) {
    //code
    //update condition value
}

do {
    //code
    //update condition value
} while (condition);
