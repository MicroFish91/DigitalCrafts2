/*

Check the presence of the function parameters 

Throw Error when function square() is called without arguments.

Create new function and use it as a default parameter. 

*/

function square(a=0) {
    return (a === 0) ? new Error('Function square requires an argument') : a * a;
}

console.log(square(10))
// 100 

console.log(square());

//BEFORE: NaN
//AFTER: Uncaught Error: Function square requrires an agrument

