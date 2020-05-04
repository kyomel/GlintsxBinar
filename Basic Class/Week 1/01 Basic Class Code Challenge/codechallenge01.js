const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function greet(name, address, birthday) {
  const currentDate = new Date();
  const age = currentDate.getFullYear()-birthday;
  console.log(`Hello, ${name}! Like you're ${age}, and you lived in ${address}`)
};


console.log("Goverment Registry\n")
rl.question("What is your name? ",  name => { 
  rl.question("Which city do you live? ", address => {
    rl.question("When was your birthday year? ", birthday => {
      greet(name, address, birthday)

      rl.close()
    })
  })
})

rl.on("close", () => {
  process.exit()
})
