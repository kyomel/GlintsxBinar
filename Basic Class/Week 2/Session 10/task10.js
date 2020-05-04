//array
let arr = [
    1,2,3,4,5,6,
    7,8,9,10,11,12
  ]
  
  module.exports = arr; // How to export

  //function
  function hello() {
    console.log("Hello World")
  }
  
  function world() {
  
  }
  
  module.exports = {
    hello,
    world
  };

// Importing Module
const readline = require('readline');
const array = require('./array.js');
const hello = require('./function.js');
const object = require('./object.js');

object.lagi();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("What is your name? ", name => {
  console.log(`Hi, ${name}`);
  rl.close();
})

//object
function lagi() {
    console.log("Function Lagi")
  }
  
  let obj = {
    name: "Fikri",
    lagi: lagi
  }
  
  module.exports = obj;
  




/*
 * DON'T CHANGE
 * */

function randomNumber() {
    let random = Math.floor(Math.random() * 100);
  
    // Recursive
    if (!random) {
      return randomNumber();
    }
  
    return random
  }
  
  function sample(arr) {
    return arr[
      Math.floor(
        Math.random() * arr.length
      )
    ]
  }
  
  function createArrayElement() {
    let random = randomNumber();
    let props = [null, random]
    let name = ["Ahmad", "Michael Jackson", "Armand", "Maulana", "Ryan", "Gosling", null]
  
    return {
      name: sample(name),
      luckyNumber: sample(props)
    }
  }
  
  function createArray() {
    let data = []
  
    for (let i = 0; i < randomNumber(); i++) {
      data.push(createArrayElement())
    }
  
    return data;
  }
  
  const arr = createArray()
  
  /*
   * Code Here!
   * */
  console.log('Raw:', arr);
  
  function clean(data) {
    let result = []
    // Code here
    for(i=0; i<data.length; i++){                               //check data array 
        if(Object.values(data[i]).includes(null) == false){     //check if values object contains name and luckyNumber contain null and give false to denied null
            result.push(data[i]);                               //result have new array value
    }
  }
  return result;
}
  
  /*
   * DON'T CHANGE
   * */
  
  if (process.argv.slice(2)[0] == "test") {
    try {
      let result = clean(arr);
      console.log('Result:', result);
  
      if (!result.length) {
        throw new Error("Array has no data")
      }
  
      result.forEach(i => {
        if (!i.name || !i.luckyNumber) {
          throw new Error("Array still contains null")
        }
      })
  
      console.log('Done:', true);
    }
  
    catch(err) {
      console.error(err.message);
      console.log('Done:', false);
    }
  }

  // Swap a value with b value;
let a = 10;
let b = 20;
console.log('a Before:', a);
console.log('b Before:', b);

// Swapper
let c = a;

a = b;
b = c;

console.log('a After:', a);
console.log('b After', b);

// Swap array?
let arr = ["Hello World", "Goodbye World", "Kata-kata Lain"];
let tmp = arr[1]; // Backup
arr[1] = arr[0];
arr[0] = tmp;
console.log('Swapped:', arr);

/*
 * Cleaning Array
 *
 * 1. Loop through Array
 * 2. If the element is null, then we don't need to push that to the array result
 * 3. Next until it reach the end of the array
 *
 * */

/*
 * LOOP Array
 * IF Array[i] == null
 *  NEXT
 * ELSE
 *  push Array[i] to the Array Result
 * */

const sleep = ms => {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    )
  }
  
  let fridge = [
    "Apple",
    "Wortel",
    "Milk",
    "Orange",
    "Leech",
    "Cabbage"
  ]
  
  // To randomly set the egg availability
  if (Math.floor(Math.random() * 1) == 1) {
    fridge.push("Egg");
  }
  
  function checkTheEggAvailability() {
    return new Promise(async resolve => {
      console.clear();
      console.log("Checking the egg availability...")
      await sleep(2000);
    
      // Check the egg availability
      for (let i = 0; i < fridge.length; i++) {
        if (fridge[i] == "Egg") {
          console.log("There's an egg!")
          resolve(false)
        }
      }
    
      // If we complete the loop and there's no egg
      console.log("There's no egg!")
      await sleep(1000);
      resolve(true)
    })
  }
  
  // Function to handle if we have to go to market or not
  async function goToTheMarket(shouldWe) {
    if (shouldWe) {
      console.clear();
      console.log("Heading to the market...");
      await sleep(4000);
      console.log("Buying an egg...");
      await sleep(1000);
    }
  }
  
  // Function to prepare the fry
  async function prepareTheFry() {
    console.clear();
    console.log("Pouring the oil...");
    await sleep(1000);
    
    console.clear();
    console.log("Lit up the stove...");
    await sleep(1000);
  }
  
  // Fry the egg
  function fryTheEgg() {
    return new Promise(resolve => {
      console.clear();
      console.log("Cook the egg...");
      sleep(4000).then(() => {
        console.clear();
        resolve("Egg is ready to eat!")
      })
    })
  }
  
  // Go to kitchen and check the fridge
  async function cookAnEgg() {
    // Check if the egg is available
    let shouldWeGoToTheMarket = await checkTheEggAvailability();
    
    // Check if we should go to the market or not
    await goToTheMarket(shouldWeGoToTheMarket);
    await prepareTheFry()
  
    console.log(
      await fryTheEgg()
    );
  }
  
  cookAnEgg()

  function randomNumber() {
    let random = Math.floor(Math.random() * 100);
  
    if (!random) {
      return randomNumber()
    }
  
    return random;
  }
  
  function createArray() {
    let arr = []
    for (let i = 0; i < randomNumber(); i++) {
      arr.push(createArrayElement())
    }
  
    return arr;
  }
  
  function createArrayElement() {
    return Math.floor(Math.random() * 1000);
  }
  
  const arr = createArray();
  
  console.log('Raw:', arr);
  
  // Filter Method
  let result = arr.filter(i => i > 500);
  console.log('Filtered:', result);
  
  // Map Method
  result = arr.map(i => i * 2);
  console.log('Mapped:', result);
  
  // forEach Method
  // arr.forEach(i => console.log(i))
  
  // sort Method
  result = arr.sort((a, b) => a - b);
  console.log('ASC:', result);
  
  result = arr.sort((a, b) => b - a);
  console.log('DSC:', result);
  
  