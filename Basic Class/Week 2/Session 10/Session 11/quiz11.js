const { EventEmitter } = require('events');
const Just = new EventEmitter();

let users = {}

Just.on('Unauthorized', email => {
   if (typeof users[email]=='number'){
       let total = users[email]+1
       users[email] = total;
   } else {
       users[email] = 0;
   }
   
    //users[email] = typeof users[email] == 'number' ?
   //++users[emai]:
   //0;
    
   if(users[email] >= 5) {
       Just.emit("Alert", email);
   }
})

Just.on("Alert", email => {
    console.log("Sending alert notification to" + email);
})

Just.emit('Unauthorized', 'test@gmail.com');
Just.emit('Unauthorized', 'test@gmail.com');
Just.emit('Unauthorized', 'test@gmail.com');
Just.emit('Unauthorized', 'test@gmail.com');

console.log('Percobaan login', users);
