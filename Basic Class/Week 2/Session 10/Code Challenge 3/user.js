const Record = require('./record.js');

class User extends Record {
  static properties = {
    name: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'number',
      required: true,
    },
    verified: {
        type: 'boolean',
        required: true
    },
    role: {
        type: 'string',
        required: true
    }
  }
  
}

  
module.exports = User;
