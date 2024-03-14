console.log("This is before setTimeout");

setTimeout(() => {
  console.log("This is a callback function");
}, 2000);

console.log("This is after setTimeout");

function logSomething() {
  console.log("Cia yra paprasta funkcija");
}

setTimeout(logSomething, 2000);

// setInterval(() => console.log("praejo dar viena sekunde"), 1000)

const numbers = [1, 2, 3, 5];

for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}

// forRAch vykdisis tiek kartu kiek numbers turi elementu
// forEach ima callback function kaip argumenta kad ji ivykditu kas karta
// 1. (1) = > vidus for each calbbacko 1
// 2. (2) = > vidus for each calbbacko 2
// ...

numbers.forEach((num) => {
  console.log(num * 2);
});

// function myForEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i])
//   }
// }

// myForEach(numbers, (num) => {
//   console.log("vidus for each calbbacko " + num);
// })

const strings = ["labas", "krabas", "bananas"];

for (let i = 0; i < strings.length; i++) {
  let newString = strings[i][0].toUpperCase();
  newString += strings[i].slice(1, strings[i].length);

  console.log(newString);
}

strings.forEach((str) => {
  let newString = str[0].toUpperCase();
  newString += str.slice(1, str.length);

  console.log(newString);
});

// 1. num = 1 return 1 * 2 doubleNumbersArray = [2]
// 2. num = 2 return 2 * 2 doubleNumbersArray = [2, 4]
const doubleNumbersArray = numbers.map((num) => num * 2);

console.log(doubleNumbersArray);

const doubleNumbersArray2 = [];
for (let i = 0; i < numbers.length; i++) {
  doubleNumbersArray2.push(numbers[i] * 2);
}
console.log(doubleNumbersArray2);

const strings2 = ["lala", "lalalalala", "kasmdfsadmg", "safd"];

const shortStrings = [];

for (i = 0; i < strings2.length; i++) {
  if (strings2[i].length < 5) {
    shortStrings.push(strings2[i]);
  }
}
console.log(shortStrings);

const shortStrings2 = strings2.filter((str) => str.length < 5);

console.log(shortStrings2);

// pakelti visus skaiciu kvadratu ir gauti nauja arr su tik skaiciais kurie yra mazesni nei 20
const numbers3 = [2, 8, 9, 6];

//          [              4 64 81 36].filer()
const res = numbers3.map((x) => x * x).filter((x) => x < 20);

console.log(res);

// forEach - naudojam kai nereikia gauti naujo arr rezultato
// map - kai reikia gauti nauja arr su apdirbtais elementais
// filter - kai reikia gauti nauja arr su tik kai kuriais elementais