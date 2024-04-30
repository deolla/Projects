const fs = require('fs');

// const chalk = require('chalk');

// const Book = {
//     title: 'Egi is the Enemy',
//     author: 'Rayan Holiday ',
// };
// console.log(Book);
// const bookJsonifed = JSON.stringify(Book);

// PARSE JSON take in a JSON DATA and return an object
// const bookJ = JSON.parse(bookJsonifed);


// fs.writeFileSync('1-json.json', bookJsonifed)

// Read the file 1-json.json, and return a buffer(i.e a series of number that computer understands).
// const databuffer = fs.readFileSync('1-json.json')
// convert the series of digit(buffer data) into a JSON string.
// const dataJSON = databuffer.toString();
// It then convert the JSON string into an Object.
// const dataObj = JSON.parse(dataJSON);
// It then log to the console.
// console.log(dataObj);


// Read file 1.json.json and convert it into a JSON string
const bufferData = fs.readFileSync('1-json.json')
const jsonData = bufferData.toString();
const data = JSON.parse(jsonData);
data.name = 'Oluwaseyi';
data.age = 25

fs.writeFileSync('1-json.json', JSON.stringify(data));


// or
// const data = JSON.parse(fs.readFileSync('1-json.json'));
// data.name   = 'Oluwaseyi';
// data.age = 25
// fs.writeFileSync('1-json.json', JSON.stringify(data));

