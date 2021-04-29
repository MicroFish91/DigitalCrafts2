const lvl4exercise1 = () => true;
const lvl4exercise2 = () => false;
const lvl4exercise3 = bool => !bool;
const lvl4exercise4 = (bool1, bool2) => bool1 && bool2;
const lvl4exercise5 = (bool1, bool2) => bool1 || bool2;
const lvl4exercise6 = (bool1, bool2) => bool1 == bool2;

// IIFE - Immediately Invoked Function Expression - Run in libraries, immediately invoke to
// put into local memory
(name => console.log(`Hi ${name}, I was immediately invoked.`)) ("Matt");

(function(num1, num2){
    console.log(num1 + num2);
})(3, 4);

// Higher order function - a function that takes another function as a parameter (callback)