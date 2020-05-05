const { EventEmitter } = require('events');
const HTTP = new EventEmitter();

// Register Listener
HTTP.on('request', req => {
  console.log('Request:', req);

  HTTP.emit('response', 'Hello World');
})

// First Listener
HTTP.on('response', res => {
  console.log('Response:', res);
})

// Second Listener
HTTP.on('response', () => {
  console.log('Request has been responded');
})

// Fire up the event
HTTP.emit('request', {
  source: '127.0.0.1',
  at: Date()
});

console.log(HTTP.listeners('response'))
