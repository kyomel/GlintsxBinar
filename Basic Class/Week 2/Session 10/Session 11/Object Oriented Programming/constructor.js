// Constructor Function
function Human(name, address, lang) {
    this.name = name;
    this.address = address;
    this.lang = lang;
  }
  
  Human.prototype.greets = function() {
    console.log(`Hi, my name is ${this.name}`);
  }
  
  const Fikri = new Human("Fikri", "Solo", "Indonesia");
  Fikri.greets();
  