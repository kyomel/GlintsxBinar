const Record = require('./record.js');

class Product extends Record {
  static properties = {
    name: {
      type: 'string',
      required: true,
    },
    price: {
      type: 'number',
      required: true,
    },
    stock: {
      type: 'number',
      required: true,
    },
  }
}

let minumanProduct = new Product ({
    name: "Fanta",
    price: 5500,
    stock: 10
})

let minumanProduct2 = new Product ({
    name: "Minute Maid Orange",
    price: 5500,
    stock: 5
})

let minumanProduct3 = new Product ({
    name: "Calpico",
    price: 4500,
    stock: 7
})

let minumanProduct4 = new Product ({
    name: "Pocari Sweat",
    price: 6500,
    stock: 8
})
  
module.exports = Product;
