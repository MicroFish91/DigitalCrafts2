// ***Object Destructuring
/* 
Declare mult() function that will multiply values of the x,y,z 
fields of the passed object
*/
var obj = {
    x: 5,
    y: 20,
    z: 3
}

console.log(mult(obj));
//300

function mult(obj){
    let { x, y, z } = obj;
    return x * y * z;
}


/*
Create shortPerson() function that will destructure each person object.
Sample result:
{n: "Mike", c: "Spain", a: 23, p:100}

If input object doesn't have postsQuantitiy field it should get default value 0.
*/

const shortPerson = (person) => {
    let { name: n, info: { country: c, age: a}, postsQuantity: p=0 } = person;
    return { n: n, c: c, a: a, p: p};
}

var person1 = {
    name: "Mike",
    info: {
        country: "Spain",
        age: 23
    },
    postsQuantity: 100
}

var person2 = {
    name: "Alice",
    info: {
        country: "Italy",
        age: 25
    }
}


console.log(shortPerson(person1));
console.log(shortPerson(person2));




