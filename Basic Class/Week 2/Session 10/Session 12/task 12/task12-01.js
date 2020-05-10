const fs = require('fs');

class Record {
  constructor(props) {
    if (this.constructor == Record) 
      throw new Error("Can't instantiate from Record");
    
    this._validate(props);
    this._set(props);
  }

  _validate(props) {
    if (typeof props !== 'object' || Array.isArray(props))
      throw new Error("Props must be an object");
    

    this.constructor.properties.forEach(i => {
      if (!Object.keys(props).includes(i))
        throw new Error(`${this.constructor.name}: ${i} is required`)
    })
  }

  _set(props) {
    this.constructor.properties.forEach(i => {
      this[i] = props[i];
    })
  }

  get all() {
    try {
      return eval(
        fs.readFileSync(`${__dirname}/${this.constructor.name}.json`)
          .toString()
      )
    }
    catch {
      return []
    }
  }


  find(id) {

  }

  update(id) {

  }

  delete(id) {

  }

  save() {
    fs.writeFileSync(
      `${__dirname}/${this.constructor.name}.json`,
      JSON.stringify([...this.all, { id: this.all.length + 1, ...this } ], null, 2)
    );
  }

}

class User extends Record {

  static properties = [
    "email",
    "password"
  ]
}

let Fikri = new User({
  email: "test01@mail.com",
  password: "123456"
});

let Fikri2 = new User({
  email: "test02@mail.com",
  password: "123456"
});



class Book extends Record {
    static properties = [
        "title", 
        "author", 
        "price", 
        "publisher"]

   
   save(){
    this.all.forEach(i => {
      if (i.title == this.title) {
        throw new Error('It already exists');
      }
    })
    super.save();
  }
}



class Product extends Record {

    static properties = [
        "name",
        "price",
        "stock"
    ]

    save(){
        this.all.forEach(i => {
          if (i.name == this.name) {
            throw new Error('It already exists');
          }
        })
        super.save();
}
}

let book = new Book({
    title: "Komedi itu lucu",
    author: "Siapa yah...",
    price: 200000,
    publisher: "ada-ada saja"
})

let item = new Product({
    name: "Jeans",
    price: 550000,
    stock: 1
})
 
/*
  Make two class who inherit Abstract Class called Record 

  Book,
    title
    author
    price
    publisher

  Product,
    name,
    price,
    stock
*/

item.save();
book.save();
Fikri.save();
Fikri2.save();

