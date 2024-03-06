const person = "Marius"

function sayHello(name) {
  console.log("Hello from a function, " + name);
  console.log(name);
}

sum(10, 20)

sayHello(person)

sayHello("Audrius")

function sum(number1, number2) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    console.log(number1, number2);
    const result = number1 + number2;
    console.log(result);
  } else {
    console.log("Pateikti argumentai negeri");
  }
}

sum(8, "asdfasdf")
sum(0, -8)

sum(5)

const manoFunkcija = function () {
  console.log("Hello form anonimine funkcija");
}

manoFunkcija()

function doStuff(arg1) {
  arg1()
}

function sayBye() {
  console.log("goodvye");
}

doStuff(sayBye)

function divide(num1, num2) {
  return num1 / num2; 

  console.log("Kazkas kas vyksta uz return");
}

const divideResult = divide(5, 5) + divide(10, 5);
console.log(divideResult);


function returnLargerNumber(num1, num2) {
  const kazkoksRandomString = "Labas Labas"
  if (num1 > num2) {
    return num1;
  }
  if (num2 > num1) {
    return num2;
  }
  if (num2 === num1) {
    return "Skaiciai yra lygus"
  }
}

console.log(returnLargerNumber(1, 8));
console.log(returnLargerNumber(9, 8));
console.log(returnLargerNumber(8, 8));

// Create a function called isEven that takes a single number parameter and returns true if the number is even, otherwise false.

function isEven(number) {
  console.log(number % 2);
  // number - 5
  // number % 2 - grazina likuti = 1
  // if(1) - true
  if (number % 2) {
    return false;
  } else {
    return true;
  }
}

console.log(isEven(5));
console.log(isEven(6));

// Write a function named truncateString that takes a string and a number as parameters. If the length of the string exceeds the specified number, truncate the string and append "..." to the end. Otherwise, return the original string.

// "Labas labas" 5
// "Labas..."

function truncateString(string, maxLength) {
  if (string.length > maxLength) {
    let result = string.slice(0, maxLength);
    // result = "Labas"
    result += "..."
    //result = "Labas..."
    return result;
    // Trumpesnis variantas
    // return string.slice(0, maxLength) + "..."
  } else {
    return string;
  }
}
console.log(truncateString("Labas labas", 5));
console.log(truncateString("Labas labas", 50));

// Create a function called findLongestWord that takes a string parameter consisting of words separated by spaces and returns the length of the longest word.

function findLongestWord(string) {
  const words = string.split(" ");

  let longestWord = words[0];

  for(let i = 1; i < words.length; i++) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i]
    }
  }

  return longestWord;
}
console.log(findLongestWord("asd asdfgasdf asdf 3 asdfasdfasdfasdfasdfasdf asdfasdf"));
