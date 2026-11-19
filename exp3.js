const fs = require('fs');


fs.writeFileSync('student.txt', 'Hello ABES!');

const data = fs.readFileSync('student.txt', 'utf8');
console.log("File Content:", data);

fs.appendFileSync('student.txt', '\nWelcome to Node.js!');
console.log("File Updated Successfully");

fs.unlinkSync('student.txt');
console.log("File Deleted Successfully");