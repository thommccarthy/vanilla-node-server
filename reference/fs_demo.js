const fs = require('fs');
const path = require('path');

//Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
//   if (err) throw err;
//   console.log('Folder created...');
// });

// Create and write to file
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello world',
//   function (err) {
//     if (err) throw err;
//     console.log('File written to...');

//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.txt'),
//       ' I am an alligator',
//       function (err) {
//         if (err) throw err;
//         console.log('File written to...');
//       }
//     );
//   }
// );

//Read File

// fs.readFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'utf8',
//   function (err, data) {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// Rename file

fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  function (err) {
    if (err) throw err;
    console.log('file renamed..');
  }
);
