const { writeFileSync } = require('fs');
for (let i = 0; i < 124565; i++) {
  writeFileSync('../content/big.txt', `Hello World ${i}\n`, { flag: 'a' });
}
