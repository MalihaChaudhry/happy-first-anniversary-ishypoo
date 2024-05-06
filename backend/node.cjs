// import statement below
const fs = require('fs');

function writeToFile(data) {
  console.log('write to File');
  fs.writeFile('./backend/name.txt', data, () => {
    console.log('file written successfully');
  });
  console.log('this will be executed first because writeFile is asynchronous');
}

// writeToFile('Maliha');

function readFromFile(file) {
  console.log('read from File');
  const read = fs.readFileSync(file, { encoding: 'utf-8' });
  console.log(read);
  const upperCase = read.toUpperCase();
  writeToFile(upperCase);
  console.log(
    'this will be logged after readFile but before writeFile because readFile is synchronous and writeFile is asynchronous'
  );
}

readFromFile('./backend/name.txt');
