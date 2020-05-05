const panitia = require('./events');

panitia.on('Register', name => {
  console.log(`${name} has just been registered`)
})

panitia.emit('Register', "Fikri")

// GamepadButton.onclick = function(e) {
//   e.preventDefault();
// }

panitia.on('Request', req => {
  console.log(req);
})

panitia.emit('Request', {
  source: 'localhost',
  headers: {},
  body: {},
  at: Date(),
  'user-agent': 'VS Code'
})
