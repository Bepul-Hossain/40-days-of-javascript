// # Tasks
// Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

// > **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

// ## 1. What will be the output of the following code and why?
// ```js
// let user = "Alice";

function outer() {
    function inner() {
        console.log(user); // Bob
    }
    let user = "Bob";
    inner();
}

outer(); 
//

// ```

// ## 2. What is the mistake in the code below?
// ```js

function add(num) {
    return total + num;
}
let total = 0; // Global, bad practice

total = add(5);
total = add(10);
console.log(total);
// ```

// ## 3. Create a function with a nested function and log a variable from the parent function.
function fn1(){
    let v = 'abc';
    function fn2(){
        console.log("===========", v); 
    }
    fn2()
}
fn1();

// ## 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?
//Ans: If I use let inside loop then there will be no access outside loop
function fn3(){
    for(let i = 0; i<3; i++){
    }
    console.log(i); // ReferenceError // If we use var instead of i then it will printed to 3
}
fn3()

// ## 5. Write a function that tries to access a variable declared inside another function.
function fn4(){
    function fn4Innter(){
        var p = 10;
    }
    fn4Innter();
    console.log(p); // ReferenceError
}
console.log(fn4());


// ## 6. What will be the output and why?
// ```js
console.log(a); // ReferenceError
let a = 10;
// ```

// ## 7. Where is the `age` variable accessible?
// ```js
// Ans B: Only inside showAge
function showAge() {
    let age = 25;
    console.log(age);
}

// ```

// Options:
// - A: In Global
// - B: Only inside showAge
// - C: It will cause an error
// - D: None of the above

// ## 8. What will be the output and explain the output?
// ```js
let message = "Hello";

function outer1() {
    let message = "Hi";

    function inner() {
        console.log(message); // Hi
    }

    inner();
}

outer1();
// ```

// ## 9. What will be the output and why?
// ```js
let x = "Global";

function outer2() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x); // Inner
    }

    inner();
}

outer2();
// ```

// ## 10. What will be the output and why?
// ```js
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce(); // -1
reduce(); // -2
// ```
