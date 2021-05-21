// Memoization is an optimization technique, quadratic or greater reduce time sum

// O(n^2)
// const isUnique = (arr) => {
//   for (let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr.length; j++)
//       // ....
//   }
// }

// O(n)
// const isUnique = (arr) => {
//   let cache = {};
//   let result = true;

//   for (let i = 0; i < arr.length; i++){
//     if(cache[arr[i]]){
//       return false;
//     } else {
//       cache[arr[i]] = true;
//     }
//   }
//   return true;
// }


// Factorial
// let cache = {};

// const times10 = (n) => {
//   if(n in cache){
//     console.log(`Fetching ${n} from cache`);
//     return cache[n];
//   } else {
//     console.log('Calculating result.');
//     cache[n] = 10 * n;
//     return cache[n];
//   }
// }

// console.log(times10(10));
// console.log(times10(10));
// console.log(times10(10));
// console.log(times10(10));


// Closure

// Fibonacci Seq. ...     1 1 2 3 5 8 13

const fib = (length) => {
  let result = [0, 1];  //[b, a]

  if(n < 2){
    return n;
  }

  for(i = 2; i<=n; i++){
    let a = result[i - 1];
    let b = result[i - 2];

    result.push(a + b);
  }

  return result[n];
}


const fib = (length) => {
  if(n < 2){
    return n;
  }

  return fib(n-1) + fib(n-2);
}