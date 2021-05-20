const http = require('http');


const server = http.createServer((req, res) => {
  
  switch(req.url){
    case '/':
      res.setHeader('Content-Type', 'text/html');
      res.end('<h1>Hello World</h1>');
      break;

    case '/aboutus':
      let date = new Date();
      res.setHeader('Content-Type', 'text/html');
      res.end(`<h1>About Us</h1> <br> ${date}`);
      break;

    case '/data':
      res.setHeader('Content-Type', 'application/json');
      let students = [
        {fName: 'Brandon', city: 'Dallas'},
        {fName: 'Matt', city: 'Seattle'},
        {fName: 'Veronica', city: 'Lino'}
      ];
      let studentsJSON = JSON.stringify(students);
      res.end(studentsJSON);
      break;

    default:
      res.setHeader('Content-Type', 'text/html');
      res.end('Error.');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000.');
});