const { readFile, writeFile } = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async (path) => {
  try {
    const first = await readFilePromise(path, 'utf8');
    await writeFilePromise(
      './content/third.txt',
      'The is the mind of my mind, where my mind is minding it own bisis.'
    );
    console.log(first);
  } catch (error) {
    console.log(`the error message: ${error}`);
  }
};

start('./content/first.txt');
start('./content/second.txt');

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', function (error, result) {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
