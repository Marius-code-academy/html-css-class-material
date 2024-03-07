(function () {
  console.log("Cia yra anonimine funkcija");
})();

console.log("Cia yra anonimine funkcija");

const result = (function (num) {
  return num * num;
})(5);

console.log(result);

// Daznai naudojama sintakse
function add(num1, num2) {
  return num1 + num2;
}

// Retai naudojama
const addFunction = function (num1, num2) {
  return num1 + num2
};

// Daznai naudojama
const addFunctionArrow = (num1, num2) => {
  return num1 + num2
};

// automatiskai returnina
// galima taip rasyt tik kai tyurime viena kodo eilute
const addFunctionArrowShorter = (num1, num2) => num1 + num2;

const res = addFunctionArrow(2, 6)
console.log(res)

console.log(addFunctionArrowShorter(10, 10));

// Jei turit viena argumenta galite nerasyti skliausteliu
const powerNumber = num => num * num;

// function calculateSquare(num) {
//   return num * num;
// }

const calculateSquare = (num) => num * num;

// Implement a function named removeFalsyValues that takes an array and removes all falsy values (e.g., false, null, 0, "", undefined, and NaN) from it.

const testArray = [5, "asfd", [2], NaN, false, true, 0, null, undefined]

const removeFalsyValues = (arr) => {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      res.push(arr[i])
    }
  }

  return res;
}

console.log(removeFalsyValues(testArray));

// const someVar = "";

// if () {
//   console.log("true");
// } else {
//   console.log("false");
// }

const arr = [1, 2, 3];
const arr2 = arr;

const changeFirstArrValue = (someArr) => {
  someArr[0] = 0;
}

changeFirstArrValue(arr);

console.log(arr);

// Implement a function named countVowels that takes a string parameter and returns the number of vowels (a, e, i, o, u) in the string.

const countVowels = (string) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for(let i = 0; i < string.length; i++) {
    // l
    // a
    for(let j = 0; j < vowels.length; j++ ) {
      // 1. l === a
      // 2. l === e
      if (string[i] === vowels[j]) {
        count++;
      }
    }
  }

  return count;
}

const amountOfVowels = countVowels("labas a i o ");

console.log(amountOfVowels);