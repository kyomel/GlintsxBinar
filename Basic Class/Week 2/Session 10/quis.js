/*
 * DON'T CHANGE
 * */

const arr = [];
let randomNumber = Math.floor(Math.random() * 100);
randomNumber = randomNumber === 0 ? Math.floor(Math.random() * 100) : randomNumber; 

function createArray() {
  for (let i = 0; i < randomNumber; i++) {
    arr.push(createArrayElement())
  }
}

function createArrayElement() {
  let random = Math.floor(Math.random() * 1000);

  return [null, random][Math.floor(Math.random() * 2)]
}

createArray()

/*
 * Code Here!
 * */
function clean(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] !== null)
      result.push(data[i]);
  }

  return result;
}
/*
 * DON'T CHANGE
 * */

if (process.argv.slice(2)[0] == "test") {
  try {
    console.log('Raw:', arr);
    console.log('Filtered:', clean(arr));
    clean(arr).forEach(i => {
      if (i == null) {
        throw new Error("Array still contains null")
      }
    })
  }

  catch(err) {
    console.error(err.message);
  }
}
