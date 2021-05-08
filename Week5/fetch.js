// https://jsonplaceholder.typicode.com/

// const request = new XMLHttpRequest();

// request.open("GET", "https://jsonplaceholder.typicode.com/albums", true);

// request.send();

// request.onreadystatechange = function(){
//     if(this.readyState === 4){
//         let data = JSON.parse(this.responseText);

//         console.log(data);
//     }
// }

function ourOwnFetch(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.send();
        request.onreadystatechange = function(){
            if(this.readyState === 4){
                resolve(this.responseText);
            }
        }
    });
}

// ourOwnFetch('https://jsonplaceholder.typicode.com/albums').then(result => console.log(result));

// async function run(){
//     let result = await ourOwnFetch('https://jsonplaceholder.typicode.com/albums');
//     console.log(result);
// }

// run();

let place = "Seattle,Washington";
let apiid = "9361bd03ec7175e9eea92fdf7a717518";

// fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiid}`)
//     .then(result => result.json())
//     .then(data => {
//         console.log(data);
//         console.log(data.main.temp);
//         let kelvin = data.main.temp;
//         let degC = Math.floor(kelvin - 273.15);
//         console.log(degC);
//         //F = C * 1.8 + 32;
//         let degF = Math.floor(degC * 1.8 + 32);
//         console.log("Degrees - F:", degF)
//     })