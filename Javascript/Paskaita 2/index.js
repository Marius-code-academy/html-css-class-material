let skaicius = 10;

skaicius += 5;

skaicius -= 10;

skaicius *= 10;

skaicius /= 5;

skaicius %= 3;

skaicius **= 8;

console.log(skaicius)

const skaicius1 = 15;
const skaicius2 = 9;

const sum = skaicius1 + skaicius2;

console.log(sum);

let skaicius3 = 10;

// pridedam kazkas
skaicius3 = skaicius3 + 1;
skaicius3++;

skaicius3--;

console.log(skaicius3);

console.log(5 < 8);
console.log(8 == "8", "8 == 8");
console.log(7 != 8);
console.log(8 === "8", "8 === 8");

// const userInput = prompt("Iveskite skaiciu");

// typeof grazina kintamojo tipa
// +userInput pakeicia ivesta teksta i skaiciu
// NaN - not a number type - number

// console.log(+userInput);

// let balance = 300;

// const moneyToTransfer = prompt("Iveskite suma");

// balance -= +moneyToTransfer;

// console.log(balance);

// let balance = 500;

// const interestRate = prompt("Iveskite palukanu norma");

// balance += balance * (interestRate / 100);

// console.log(balance);

const word = "bananas35w451y3";

const guess = prompt("Bandykite atspeti zodi");

console.log("spejimo rezultatas:", word === guess);