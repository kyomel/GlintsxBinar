const Record = require('./record');

class User extends Record {
  static properties = {
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    encrypted_password: {
      type: 'string',
      required: true
    }
  }

  constructor(props) {
    super(props);
    this.password = this.encrypted_password;
  }

  set password(password) {
    return this.encrypted_password = `pretend-that-this-is-an-encrypted-version-of-${password}`
  }
}

let Fikri = new User({
  email: "test01@mail.com",
  encrypted_password: "123456"
});

let Agus2 = new User ({
  emai: "agus123@mail.com",
  encrypted_password: "780234"
})

Fikri.save();
Agus2.save();

