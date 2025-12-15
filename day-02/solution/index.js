// - ✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.
// - ✅ Task 2: Print the values to the console.
// - ✅ Task 3: Try reassigning values to let and const variables and observe errors.
// - ✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.

let name, age, isStudent, favProgLang;
console.log("🚀 > index.js:7 > name , age, isStudent, favProgLang:", name, age, isStudent, favProgLang);

var a = 5;
var a = 6; // ok
console.log(a); // 6
name = 'bepul'
console.log(name); // bepul



const arr= [];
arr.push(1) // [1]
console.log(arr);

const obj = {};

obj.name = 'Rahim'

console.log(obj); // {name: 'Rahim'}

const checkConst = 'abc';
checkConst = 'def'; // Uncaught TypeError: Assignment to constant variable.
