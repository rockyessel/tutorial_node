const { readFileSync, writeFileSync } = require('fs');
//OR
// const fs = require('fs');
// fs.readFileSync;

// console.log(fs);

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

writeFileSync(
  './content/result.txt',
  `Here is the result for the first, and second input: ${first}, ${second}`
);
