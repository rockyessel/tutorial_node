const { readFile } = require('fs');

console.log(`started a first task`);

readFile('./content/first.txt', 'utf8', function (error, result) {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result);
  console.log(`Task completed!`);
});
console.log(`Starting next task`);
