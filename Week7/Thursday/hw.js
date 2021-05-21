// 1. Read a file

// const readline = require('readline');
// const fs = require('fs');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Filename: ', (userInput) => {
  
//   fs.readFile(userInput, function (error, buffer) {
//     if (error) {
//       console.error(error.message);
//       return;
//     }
//     const contents = buffer.toString();
//     console.log(contents);
//     rl.close();
//   });
// });




// 2. DNS Lookup
// const readline = require('readline');
// const dns = require('dns');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Domain Name: ', (userInput) => {
//   dns.lookup(userInput, (err, address) => {
//     console.log(address);
//     rl.close();
//   });
// });



// 3.  Read & Write
// const readline = require('readline');
// const fs = require('fs');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let askInput = (desc) => {
//   return new Promise((resolve, reject) => {
//     rl.question(`${desc} File: `, (input => {
//       resolve(input);
//     }))
//   })
// }

// async function run() {
//   const inputOne = await askInput('Input');
//   const inputTwo = await askInput('Output');
//   fs.copyFile(inputOne, inputTwo, (err) => {
//     if (err) throw err;
//     console.log(`Wrote to file ${inputTwo}.`);
//   });
// }

// run();



// 4. Save a Web Page
const http = require('http');
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askInput = prompt => {
  return new Promise((resolve, reject) => {
    rl.question(prompt, (input => {
      resolve(input);
    }))
  })
}

const bodyParser = url => {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let rawData = '';
      res.on('data', chunk => { rawData += chunk; });
      res.on('end', () => {
        resolve(rawData);
      });
      res.on('error', err => {
        reject(err);
      })
    });
  })
}

async function run() {
  const url = await askInput('URL: ');
  const destinationFile = await askInput('Save to file: ');
  const res = await bodyParser(url);
  fs.writeFile(destinationFile, res, err => {
    if (err) throw err;
    console.log(`Wrote HTML Data to file ${destinationFile}.`)
  })
}

run();