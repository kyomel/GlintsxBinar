/*
 * for loop
 * */

for (i = 0; i < 10; i += 2) {
    console.log(i) // Always increment
    console.log("Ini putaran ke", i + 1);
  }
  
  let arr = [8,9,10,5,2,0,6,10];
  
  for (let i = 0; i < arr.length; i++) {
    let elemen = arr[i];
    let result = elemen * 2;
    console.log(result);
  }

/*
 * while loop
 * */

let i = 0; // Global Variable
while(i < 10) {
  console.log("Before:", i)

  i++; // Statement to make the loop going to break

  console.log("After:", i)
}

let arr = [8,9,10,5,2,0,6,10];

i = 0;
while (i < arr.length) {
  console.log(arr[i] * 2);
  i++;
}

/*
 * do loop
 * */

let i = 0;
do {
  console.log("Hello World");
  i++
} while (i < 10);

/*
 * Kita punya array
 * Loop array itu
 * Tapi, kita console.log hasil dari
 * elemen index a dikurangi dengan elemen index b
 * Dimana index b adalah index setelah index a
 * */

let arr = [8,9,10,5,2,0,6,10];

// for (let i = 0; i < arr.length - 1; i++) {
//   console.log(arr[i] - arr[i + 1]);
// }

/*
 * Array Mapping
 *
 * Loop that being used for
 * mutating the array element
 * */

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * 2; // Directly change the array
}
console.log('Mutated Array:', arr);

let result = []; // We will push elements in there
for (let i = 0; i < arr.length; i++) {
  result.push(arr[i] * 2);
}
console.log('New Array:', result);
console.log('Mutated Array:', arr);

/*
 * Filtering Array
 *
 * If there's some element inside the array
 * That doesn't our expectation
 * Then, we don't to push that array
 * In the array result
 * */

arr = [1,2,3,4,5,6,7,8,9,10];
result = [];
for (let i = 0; i < arr.length; i++) {
  if (i >= 6)
    result.push(arr[i]);
}

console.log('Raw:', arr);
console.log('Result:', result);

arr = [
  {
    name: "Fikri",
    rank: 10,
  },
  {
    name: "Aron",
    rank: 9
  },
  {
    name: "Armand",
    rank: 8
  },
  {
    name: "Rasyid",
    rank: 10
  },
  {
    name: "Fadli",
    rank: 11
  },
  {
    name: "Galih",
    rank: 5
  },
  {
    name: "Michael",
    rank: 89
  },
]


result = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].rank >= 10)
    result.push(arr[i]);
}

console.log('Raw:', arr);
console.log('Result:', result);

// Autoname Key
let obj = {
    key: "Value"
  }
  
  let name = "Fikri";
  let address = "Solo";
  obj = {
    name,
    address
  }
  
  console.log(obj);
  