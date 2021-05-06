// Create a function sum() that will sum all arguments passed to it.
// Quantity of the arguments is unknown.

console.log(sum(1, 3));
console.log(sum(10, 20, 5));

function sum(...args){
    return args.reduce((sum, addend) => sum + addend, 0);
}