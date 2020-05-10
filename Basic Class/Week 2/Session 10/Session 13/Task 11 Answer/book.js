const Record = require('./record');

class Book extends Record {
  static properties = {
    title: {
      type: 'string',
      required: true
    },
    author: {
      type: 'string',
      required: true
    },
    price: {
      type: 'number',
      required: true
    },
    publisher: {
      type: 'string',
      required: true
    },
  }
}

const PastaBook = new Book({
  title: "How to cook pasta?",
  author: "Luigi",
  price: 80000,
  publisher: "TypeScript"
})

PastaBook.save();
