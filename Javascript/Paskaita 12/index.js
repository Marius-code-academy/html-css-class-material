const numbers = [12, 8, -92, 0, 0];
// a - 12, b - 8 = 4
// a - 8, b - -92 = -84

console.log(numbers.sort((a, b) => b - a));
console.log(numbers.sort((a, b) => a - b));

const words = ["labas", "adata", "absdf", "zebras"];

console.log(words[0].localeCompare(words[1]));

console.log(words.sort((a, b) => a.localeCompare(b)));
console.log(words.sort((a, b) => b.localeCompare(a)));
console.log(words.sort((a, b) => -a.localeCompare(b)));

const arrayOfArrays = [
  [1, 6],
  [2, 9],
  [-8, 7],
];

console.log(arrayOfArrays.sort((a, b) => b[1] - a[1]));

const numbers2 = [12, 8, -92, 0, 0, 8, 2];

let sum = 0;

for (let i = 0; i < numbers2.length; i++) {
  sum += numbers2[i];
}

console.log(sum);

// 1. accumulated - 12, current - 8
// 2. accumulated - 20, current - -92
const sum1 = numbers2.reduce((accumulated, current) => {
  console.log(`accumulated - ${accumulated}, current - ${current}`);
  return accumulated + current;
}, 20);

console.log(sum1);

const wordsCombined = words.reduce((acc, cur) => {
  return acc + cur;
}, "labas, ");

console.log(wordsCombined);

// Sukurkite dvi funkcijas:
// alertName
// consoleName

// Abi funkcijos turės vieną parametrą – vardą. Jos bus callback funkcijos. Pirmoji funkcija vardą alertins, antroji – console.log'ins.

// Susikurkite pagrindę funkciją (coreFunction). Ši funkcija – paims pirmą raidę, ją padarys didžiąja ir prijungs kitas raides (t.y. užtikrina, kad vardas prasideda iš didžiosios; pvz: "petras" => "Petras"), tada iškviečia vieną iš callback funkcijų (nesvarbu kurią, galima jas kaitalioti).

function alertName(name) {
  alert(name);
}

function consoleName(name) {
  console.log(name);
}

function coreFunction(name, callback) {
  const capitalizedName = name[0].toUpperCase() + name.slice(1, name.length);
  callback(capitalizedName);
}

coreFunction("asdfaf", consoleName);
// coreFunction("poskdf", alertName)

// Nusikopijuokite array const cars = ["BMW", "VW", "Audi"] ir, naudojant forEach, atspausdinkite kiekvieną elementą (automobilio reikšmę).
cars = ["BMW", "VW", "Audi"];

cars.forEach((car, i) => console.log(`${i}: ${car}`));

// Sukurkite masyvą pavadinimu names su savo draugų vardais, raidžių kapitalizaciją pamiksuokite (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padarykite, kad susikurtų naujas array (ir jį atspausdinkite), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" -> "Petras").

const names = ["peTras", "Jonas", "aNTanaS"];

const fixedNames = names.map(
  (name) => name[0].toUpperCase() + name.slice(1, name.length).toLowerCase(),
);

console.log(fixedNames);

// Sukurkite array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter – išveskite tik tuos skaičius, kurie yra didesni arba lygūs 18.

const ages = [1, 8, 85, 47, 18];

const adults = ages.filter((age) => age >= 18);

console.log(adults);

// Sukurkite array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find – suraskite bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

const cities = ["Klaipeda", "Vilnius", "Kaunas", 'kaunas'];

const cityStartingWithK = cities.find((city) => city[0] === "K");
console.log(cityStartingWithK);

const areSomeCitiesStartingWithLowercase = cities.some((city) => city[0] === city[0].toLowerCase())


console.log(areSomeCitiesStartingWithLowercase);

const areAllCitiesStartingWithUppercase = cities.every((city) => city[0] === city[0].toUpperCase())

console.log(areAllCitiesStartingWithUppercase);