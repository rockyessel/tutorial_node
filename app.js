const { readFileSync, writeFileSync } = require('fs');
//OR
// const fs = require('fs');
// fs.readFileSync;

// console.log(fs);

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);
