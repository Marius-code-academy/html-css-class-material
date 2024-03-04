const fruits = ["Apple", "Orange", "Pear", "asdfsadf"];

const amountOfFruit = fruits.length;

fruits[1] = "Banana";

// Splice koreguoja originala
fruits.splice(2, 2, "Kazkas kito", "antras", "trecias");

console.log(fruits);
console.log(amountOfFruit, fruits.length);
console.log(fruits[amountOfFruit - 1]);

// let newArray = myFruits.slice(0, 2).concat("kiwi", myFruits.slice(3));

const cars = ["Audi", "BMW", "Volvo", "Citroen"];

// Slice padaro elementu kopija ir neliecia originalo
const smallerArray = cars.slice(1, 3);

// Concat nekeicia originalo
const additionalCars = smallerArray.concat("kazkas paildomai prideto", 8, 3, true, cars.slice(0));

console.log(smallerArray);
console.log(additionalCars);

// console.log(smallerArray);
// console.log(cars);

const arr1 = [1, 5, 651, 651, 651, 68, 484];

// Prie originalo galo prideda reiksme
arr1.push(354651);

// Prie originalo priekio prideda reiksme
arr1.unshift("Reiksme pradzioje");

console.log(arr1);

const arr2 = [-1, 5, 2, 3, 6, 8, 1];

// Is originalo paima paskutini elementa
const lastNumberOfArray = arr2.pop();

// Is originalo paima pirma elementa
const firstNumberOfArray = arr2.shift();

console.log(firstNumberOfArray);
console.log(lastNumberOfArray);
console.log(arr2);

console.log("-----------------------------------------------");

const myArray = [1, 2, 3, 4, 5, 6];

// Ne kopijuoja, o isaugo andresa (pointer)
const myArray2 = myArray;

myArray2[0] = "Kazkas kito";
// spread operator (...) iskleidzia array i palaidas reiksmes
console.log(...myArray);
// Padaro kopija
const myArrayCopy = [...myArray];
// Padaro kopija
const myArrayCopy2 = JSON.parse(JSON.stringify(myArray));
console.log(myArrayCopy2);
myArrayCopy[2] = "Vel kazkoks pakeitimas";
console.log(myArrayCopy);
console.log(myArray);

// iskonsoliti kiekviena array reiksme

const testArray1 = [true, "Sfasdfasdf", 6546, [1, 5]];

for (let index = 0; index < testArray1.length; index++) {
  console.log(testArray1[index]);
}

// Surasti visu array elementu suma
const testArray2 = [1, 5, -5, 22];

let sum = 0;

for (let index = 0; index < testArray2.length; index++) {
  let sum2 = 0;
  sum2 += testArray2[index];
  sum += testArray2[index];
}

console.log(sum);

// Isfiltruoti neigiamas reiksmes is array (originalo nepakeisti)

const testArray3 = [5, -5, 7, 0];
const positiveArray = [];

for (let index = 0; index < testArray3.length; index++) {
  // testArray3[index] - paima atskira reiksme kiekviena karta vykdant for cikla is testArray3
  // testArray3[index] >= 0, 1. 5 >= 0, 2. -5 >= 0 t.t.
  if (testArray3[index] >= 0) {
    // positiveArray.push prie rezultato array galo prideda katik ife ptikrinta reiksme
    positiveArray.push(testArray3[index]);
  }
}

console.log(positiveArray);

// reverse an array

const testArray4 = [1, 2, 3];

const reversed = []; // norimas rezultatas: [3, 2, 1]

for (let i = testArray4.length - 1; i >= 0; i--) {
  console.log(i);
  reversed.push(testArray4[i])
}

console.log(reversed);

const reversed2 = testArray4.reverse();

console.log(reversed2);