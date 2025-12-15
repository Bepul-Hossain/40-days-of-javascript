// # Tasks
// Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

// > **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

// ## 1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

// ## 2. Explain Variable and Function Hoisting with Example. Post the code as your answer.

function fn() {
    console.log("========= r inside function======", r); // undefined
    console.log("=========d inside function======", d); // undefined
    var d = 10 // Funtional Hoisting.
}

fn()
console.log("=========r outside function======", r);

var r = 10; // Global Hoisting

//---------------------

{
    let a = 5;
    console.log("hello ", a); // Dead zone for b and c
    console.log(b);

    let b = 6;
    let c = 7;
    console.log(b, c);


}
