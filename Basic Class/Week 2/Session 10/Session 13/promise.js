const fs = require('fs');
function console4() {
  console.log(4);
}

// Asynchrous => Task Queue
setTimeout(() => console.log(5), 50);

// Synchronous
console.log(1);
console.log(2);
console.log(3);
console4();

// Asynchronous
function save() {
  return new Promise((resolve, reject) => {
    fs.writeFile(__dirname + '/contoh.json', 'Data', (err, data) => {
      if (err) return reject(err.message);

      resolve("Data saved!");
    })
  })
}

save()
  .then(i => console.log(i)) // Resolve
  .catch(err => console.log(err)) // Reject

function isDataBanana(data) {
  return new Promise(function(resolve, reject) {
    if (data == "Banana") return resolve(true);

    reject(false)
  })
}

isDataBanana("Bukan Banana").then(() => console.log("Data is Banana")).catch(() => console.log("Data is not banana"));

function randomPromise() {
  let random = Math.floor(Math.random() * 2);

  if (random == 0) 
    return Promise.reject("Tidak terpenuhi");

  if (random == 1)
    return Promise.resolve("Terpenuhi")
}

randomPromise()
  .then(data => console.log(data))
  .catch(err => console.log(err));
