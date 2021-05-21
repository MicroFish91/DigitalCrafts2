// 80 is the standard port used for the internet; 80 for http, 443 for https
// http://www.example.com:80/path/to/myFile.html?key1=value&key2=value#somwhereindoc
// req.params
// req.query

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));  // static assets

let data = {data: [{
  id: 0,
  name: "Golden Retriever",
  img: "https://www.gannett-cdn.com/presto/2020/02/07/USAT/4a2add44-2e03-41a8-ba02-722c8044d711-VPC_GOLDEN_RETRIEVER_TENNIS_BALLS_DESK_THUMB.jpg?quality=10"
},
{
  id: 1,
  name: "Lab",
  img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg"
},
{
  id: 2,
  name: "pug",
  img: "https://live.staticflickr.com/3095/3140892215_7fcba48323_b.jpg"
},
{
  id: 3,
  name: "poodle",
  img: "https://s3.amazonaws.com/ogden_images/www.morningjournalnews.com/images/2020/02/12231125/best-in-show-1-1100x733.jpg"
}
]};

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
})

app.get('/aboutus', (req, res) => {
  let date = new Date();
  res.send(`<h1>About Us</h1><br>${date}`);
});

app.get('/data', (req, res) => {
  let students = [
    {fName: 'Brandon', city: 'Dallas'},
    {fName: 'Jose', city: 'Atlanta'},
    {fName: 'Jacob', city: 'Tampa'}
  ];
  res.json(students);
});

app.get('/cats?', (req, res) => {
  res.send(req.query.name);
})

app.get('/dogs', (req, res) => {
  res.send(`

    <link rel="stylesheet" href="./css/styles.css"></link>
  
    <ul>
      <li><a href="/dogs/0">Golden Retriever</a></li>
      <li><a href="/dogs/1">Lab</a></li>
      <li><a href="/dogs/2">Pug</a></li>
      <li><a href="/dogs/3">Poodle</a></li>
    </ul>

  `);
})

app.get('/dogs/:id', (req, res) => {
  let id = req.params.id;
  res.send(`
  
    <h1> ${data.data[id].name} </h1>
    <img src="${data.data[id].img}">

  `);
})

app.listen(port, () => console.log(`Server is listening on port ${port}.`));