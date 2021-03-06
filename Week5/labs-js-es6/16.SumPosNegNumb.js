
/*
Create a function sumPlusMinus() that takes an array and sums 
separately positive and negative numbers

it should return an object like this:

{
    plus: 74, // sum of all positive numbers
    minus: -54 // sum of all negative numbers
}

*/


var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Write code here
function sumPlusMinus(args){
    return args.reduce((obj, addend) => {
        return (
            {
                plus: (addend >= 0) ? obj.plus + addend : obj.plus,
                minus: (addend < 0) ? obj.minus + addend : obj.minus
            }
        )
        }, {plus: 0, minus: 0});
}

console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}

