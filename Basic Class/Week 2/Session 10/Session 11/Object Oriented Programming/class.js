/*

  Approach in OOP:
  1. Factory Function
  2. Constructor Function 
  3. Class Declaration => Relevant in another languange

  */

/* 
  Class Declaration 
  Class is a blueprint for making an object

  Human
  =====
  Name,
  Can breath,
  Can walk,
  */

 class Human {
    /*
  
      There are two types of method and property;
      1. Static/Class
      2. Instance/Prototype
  
      */
  
    static isDestructive = true;
    static isMortal = true;
    static foods = [
      "Animal",
      "Vegetables"
    ]
  
    static isEating = (food) => {
      return this.foods.includes(food);
    }
  
    constructor(name, address, lang) {
      this.name = name;
      this.address = address;
      this.lang = lang;
    }
  
    greets() {
      console.log(`Hi, my name is ${this.name}!`);
    }
  
    // Private Method
    #prepare = () => {
      console.log("Prepare to go to work");
      console.log("Take a bath");
      console.log("Use parfume!");
      console.log("On the way");
    }
  
    #doWork = () => {
      console.log("Arrive to the office");
      console.log("Do work!");
      console.log("Take a break");
      console.log("Do work again");
    }
  
    #goHome = () => {
      console.log("On the way home");
      console.log("Sleep");
    }
  
    work() {
      this.#prepare();
      this.#doWork();
      this.#goHome();
    }
  
    marry(spouse) {
      this.spouse = spouse;
    }
  
    test() {
      // Accessing Static Props on Instance
      console.log(this.constructor.isEating("Animal"));
    }
  }
  
  // Static Call
  // console.log(Human.isDestructive);
  
  // Class, Instance. Instance is result of a class, part of class.
  const Fikri = new Human("Fikri", "Solo", "Indonesia");
  console.log(Fikri.lang);
  
  Fikri.work()
  
  const Woman = new Human("Woman", "Unknown", "Unknown");
  Fikri.marry(Woman);
  Fikri.spouse.work()
  
  console.log(
    "Is human eating animals?",
    Human.isEating("Animal")
  );
  
  console.log(
    "Is human eating human?",
    Human.isEating(Human)
  );
  
  Fikri.test();
  
  // try {
  //   Fikri.#doWork();
  // }
  
  // catch(err) {
  //   console.log(err.message);
  // }
  
  // Modify method on fly
  Human.prototype.dismiss = function() {
    console.log(`${this.name} is leaving!`);
  }
  
  // Modify static method on fly
  Human.test = function() {
    console.log(`Human is mortal, and it is ${this.isMortal}`)
  }
  
  Fikri.dismiss();
  Fikri.random();
  Human.test();
  