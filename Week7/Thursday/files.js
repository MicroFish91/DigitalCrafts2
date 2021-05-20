const fs = require('fs');

fs.writeFile('node.txt', 'I love node', (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('File saved successfully.');
})

fs.readFile('node.txt', function (error, buffer) {
  if (error) {
    console.error(error.message);
    return;
  }
  console.log(buffer);
  let contents = buffer.toString();
  console.log(contents);
});