const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', function () {
  console.log(`data received`);
});
customEmitter.on('response', function () {
  console.log(`some other logic here!`);
});

customEmitter.emit('response');
