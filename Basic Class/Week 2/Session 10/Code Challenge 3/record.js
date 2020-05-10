const fs = require('fs');
const path = require('path');

module.exports = class Record {
  // Filepath
  static get filepath() {
    return path.resolve(
      __dirname,
      `${this.name}.json`
    )
  }

  // Get All Data
  static get all() {
    try {
      return eval(
        fs.readFileSync(this.filepath)
          .toString()
      )
    }
    catch {
      return []
    }
  }

  constructor(props) {
    if (this.constructor == Record) 
      throw new Error("Can't instantiate from Record");
    
    this._set(props);
  }

  _set(props) {
    if (typeof props !== 'object' || Array.isArray(props))
      throw new Error("Props must be an object");

    const properties = this.constructor.properties;

    for (let i in properties) {
      // Assign the properties as instance props in that class
      this[i] = props[i];

      if (typeof this[i] !== properties[i].type)
        throw new Error(`${i} should be ${properties[i].type}`);

      if (!this[i] && properties[i].required)
        throw new Error(`${i} is required`);

      if (properties[i].unique)
        this._checkUnique({ key: i, value: this[i] });
    }
  }

  _checkUnique({ key, value }) {
    let query = {}
    query[key] = value;

    if (this._find(query).length !== 0)
      throw new Error(`${key} already exists`);
  }

  _find(props) {
    return this.constructor.all.filter(i => {
      for(let key in props) {
        if (i[key] == props[key]) return true;
      }

      return false;
    })
  }

  static save(data) {
    fs.writeFileSync(
      this.filepath,
      JSON.stringify(data, null, 2)
    );
  }

  static find(id) {
    let result = new this(
      this.all.filter(i => i.id === id)[0]
    );

    result.id = id;
    return result;
  }
  // This method is used to check stock
  static check (numb) {
    let result = this.all.filter(i => i.stock > numb);
    return result;
  }

  save() {
    this.constructor.save([
      ...this.constructor.all,
      {
        id: this.constructor.all.length + 1,
        ...this
      }
    ]);
  }
}
