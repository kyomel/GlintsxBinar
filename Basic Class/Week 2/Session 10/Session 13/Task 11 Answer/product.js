const Record = require('./record');

class Product extends Record {
  static properties = {
    name: {
      type: 'string',
      required: true
    },
    price: {
      type: 'number',
      required: true
    },
    stock: {
      type: 'number',
      required: true
    },
  }
}

module.exports = Product;
