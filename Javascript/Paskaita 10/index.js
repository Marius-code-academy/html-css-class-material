const someString = "Labas";
const arr = ["asd", "asdf"]

arr[0] = "asdfasdfasdfds"
console.log(arr);
someString[1] = "b"
console.log(someString[1])

console.log(someString.charAt(1));
console.log(someString.at(-2));

const part1 = "Labas,"

const fullString = part1.concat(" Marius", "asdfsdaf", "asdfd", someString);
const fullString2 = part1.concat(...arr)
console.log(fullString);
console.log(part1);
console.log(fullString2);

let someString2 = "Kazkas";

someString2 += "asdfasdf"

const darVienasString = someString2 + " Dar kazkas papildomai"

console.log(someString2);
console.log(darVienasString);

function getString() {
  return "string from a function"
}

const someString3 = `sadfasd ${someString2} ${2 + 3} ${getString()}`;

console.log(someString3);

const someNumber = 23.589654;

console.log(someNumber.toFixed(3));

const someNumber2 = 3215.2546;

console.log(someNumber2.toPrecision(10));

const someNumber3 = 32.25;

console.log(someNumber3.toString());

const isTrue = true;

console.log(typeof isTrue.toString());

console.log(isTrue.valueOf());

const someString4 = "   marius@asdfsa.lt  marius  ";
console.log(someString4);
console.log(someString4.trim());
console.log(someString4.trimEnd());

console.log(someString4.replace("marius", "Martynas"));

console.log(someString4.replaceAll("Marius", "Martynas"));

console.log(Math.round(20.58))

console.log(Math.floor(20.58));

console.log(Math.abs(-25));

console.log(Math.ceil(20.1));

const arOfNumbers = [1, 8, -5];

console.log(Math.max(...arOfNumbers));

console.log(Math.sqrt(49));