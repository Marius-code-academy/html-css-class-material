// 1. i = 0, 0 < 5 
// 2. i = 1, 1 < 5
// 3. i = 2, 2 < 5
// 4. i = 3, 3 < 5
// 5. i = 4, 4 < 5
// 6. i = 5, 5 < 5

// 1 veiksmas - sukuria i kintamaji
// 2 veiksmas - patikrina salyga ar i < 5
// 3 veiksmas - jei salyga teisinga, vykdomas blokas
// 4 veiksmas - pakeiciamas i kintamasis (i++)
for (let i = 5; i < 5; i++) {
  console.log(i);
}

// for (let i = 100; i >= 10; i -= 10) {
//   console.log(i);
// }

// let j = 5;

// while (j < 5) {
//   j++;
//   console.log(j, "while");
// }

// let k = 5;

// do {
//   k++;
//   console.log(k, "do while");
// } while (k < 5);

// Print Numbers: Write a loop that prints numbers from 1 to 10.

// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// Even Numbers: Write a loop that prints even numbers from 2 to 20.

// for( let i = 2; i <= 20; i+=2) {
//   console.log(i);
// }

// Sum of Numbers: Write a loop that calculates the sum of numbers from 1 to 10.
// let sum = 0;

// 1 sum = 1
// 2 sum = 3
// for (let i = 1; i<=10; i++) {
//   sum += i;
// }

// console.log(sum);

// Reverse a String: Write a loop to reverse a given string.

let isUserInputValid = false;

do {
  const userInput = prompt("Iveskite koki zodi");
  if (userInput) {
    isUserInputValid = true;
    let reversedString = "";
    
    for (let i = userInput.length - 1; i >= 0; i--) {
      reversedString += userInput[i]
    }
    
    console.log(reversedString);
  } else {
    alert("Neisidirbinek!")
  }
} while(!isUserInputValid);

