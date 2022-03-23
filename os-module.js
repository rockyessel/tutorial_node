const os = require('os'); //os- Operating System

const user = os.userInfo();
console.log(user);

//Return system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  architecture: os.arch(),
  hostname: os.hostname(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

if (
  currentOS.name === 'Linux' ||
  currentOS.name === 'Darwin' ||
  currentOS.name === 'Windows_NT'
) {
  console.log(`You are using "${currentOS.name}" now!`);
}

console.log(currentOS);
