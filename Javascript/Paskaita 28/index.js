import defaultStuff, { divideNumbers as pervadintaFunkcija, PI } from "./utility/mathFunctions.js"

// import * as mathStuff from "./utility/mathFunctions.js"
// console.log(mathStuff.default())
console.log(defaultStuff())

console.log(pervadintaFunkcija(2, 3))
console.log(PI);

function sayName(name = "Vardas") {
  console.log(`My name is ${name}`);
}

sayName("Augustina");

sayName();

sayName(null);

function addTwoNumbers(a, b) {
  return a + b;
}

const someString = `dvieju skaiciu suma yra: ${addTwoNumbers(1, 2)} ${1 + 3}`;

console.log(someString);

const longString = `lkasjdbnflkjansdlgkfjasdfg 
asdfasdfasdgasdfl;gjnasdlfg
dsfgl;kjnsdklfg
l;knfsdgl;kns`;

console.log(longString);

// const lohngString2 = "klajsdfbnglkjsfndg
// lkjsdnfgkljsdfng"

const someArr = [1, 3, 8];
const arrCopy = [...someArr]

const arr2 = [8, 7, ...someArr];

console.log(arr2);

function addAllNumbers(x, ...args) {
  console.log(args);
  console.log(x);
  return args.reduce((prev, current) => prev + current);
}

console.log(addAllNumbers(200, 9, 7, 85));

const obj1 = {
  name: "Vardas",
  age: 23
}

const obj2 = {
  ...obj1,
  address: "Adresas",
  name: "Vardas antrame",
}

console.log(obj2);

const person = {
  name: "Antanas",
  lastName: "Pavardenis",
  age: 52,
};

const name = "person.name";
const age = "person.age";

// console.log(name, age);

const { name : personsName, age : personsAge } = person;

console.log(name, age);

console.log(personsName, personsAge);

const arr3 = ["Labas", "ate", "asdfasd", 8];

const value1 = arr3[0]
const value2 = arr3[1]

console.log(value1, value2);

const [x1, , x3] = arr3;

console.log(x1, x3);

function multiplyTwoNumbers(x, y) {
  return x * y;
}

const multiplyTwoNumbersArrow = (x, y) => x * y;

const someObj = {
  fn1: () => console.log(this),
  fn2: function () {
    console.log(this);
  }
}

someObj.fn1();
someObj.fn2()