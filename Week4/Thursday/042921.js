// Sort
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// console.log(people.sort());
// console.log(people.sort((name1, name2) => name1.length - name2.length));

var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6] ];

// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// console.log(arr[0].reduce(reducer));

// console.log(arr.sort((array1, array2) => array1.reduce(reducer) - array2.reduce(reducer)));

// function call3Times(fun) { fun(); fun(); fun(); }

// console.log(call3Times(() => console.log('Hello World!')));

var words = ['very', 'important', 'person'];

const reducer = (accumulator, currentValue) => accumulator[0] + currentValue[0];
console.log(words.reduce(reducer));