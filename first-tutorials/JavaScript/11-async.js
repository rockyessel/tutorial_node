const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', function (error, result) {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;

  readFile('./content/second.txt', 'utf8', function (error, result) {
    if (error) {
      console.log(error);
    }
    const second = result;

    writeFile(
      './content/result-async.txt',
      `Here is the result:for ${first} and the ${second}`,
      function (error, result) {
        if (error) {
          console.log(error);
          return;
        }
        console.log(error);
      }
    );
  });
});
