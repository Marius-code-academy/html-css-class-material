const person = {
  name: "Marius",
  age: 27,
  "first-pet": "Katukas",
};

person.name = "Arturas";
person.lastName = "Pavarde";

console.log(person["name"]);
console.log(person.name);

const firstPet = "first-pet";

console.log(person[firstPet]);

delete person.name;

console.log(person);
console.log(person.age);

const people = [
  {
    name: "Tadas",
    age: 20,
  },
  {
    name: "Juste",
    age: 30,
  },
  {
    name: "Antanas",
    age: 25,
  },
];

const peopleSortedByAge = people.sort((a, b) => a.age - b.age);

console.log(peopleSortedByAge);

// Sukurkite objektą, kuriame būtų informacija apie mėgstamą receptą 🥞. Jame turėtų būti savybės:
// title (string)
// serves (number) ir
// ingredients (stringų masyvas)

// Atskirose eilutėse (kiekvienai po vieną console.log) registruokite recepto informaciją, kad ji atrodytų taip:
// Pancakes
// Serves: 2
// Ingredients:
// milk
// flour
// sugar

const recipe = {
  title: "blynai",
  serves: 4,
  ingredients: ["miltai", "kiausinis", "pienas", "sugar"],
};

console.log(recipe.title);
console.log(`Serves ${recipe.serves}`);

console.log("Ingredients:");
recipe.ingredients.forEach((item) => console.log(item));

const marius = {
  name: "Marius",
  age: 27,
  isWorking: true,
  pets: ["zuvyte", "suo"],
  mom: {
    name: "mama",
    age: 40,
  },
  sayHello: () => {
    console.log("Hello");
  },
};

console.log(marius.mom.age);
marius.sayHello();

function changeName(obj) {
  const objCopy = { ...obj };
  objCopy.name = "kazkas kito";
}

console.log(marius);

changeName(marius);

console.log(marius);

console.log(Object.values(marius));

const people1 = [
  {
    name: "Petras",
    age: "18",
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];
// 1. Pilnamečiai
// Prafiltruokite masyvą, kad rodytų tik pilnamečius.

const adults = people1.filter((p) => p.age >= 18);
console.log(adults);

// 2. Tik pilnamečių vardai
// Pakoreguokite aukščiau nurodytą pratimą, kad pilnamečių array rodytų tik vardus (amžius jau nesvarbu). Rezultatas turi būti: ["Petras", "Antanas", "Diana"].

const adults1 = people1.filter((p) => p.age >= 18).map((p) => p.name);
console.log(adults1);

// 3. Tvarka
// Antro pratimo array išrikiuokite A-Z tvarka. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę.

const adults2 = people1
  .filter((p) => p.age >= 18)
  .map((p) => p.name)
  .sort((a, b) => a.localeCompare(b));
console.log(adults2);

// Prekės
// Sukurkite funkciją. Ji priims vieną argumentą – array su objektais, kurie turės du parametrus:
// name
// ir price.
// Grąžinkite – brangiausią ir pigiausią prekes.
// Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje – tik du).
// Pvz:
// iškvietimas: fn([{name: "lemonade", price: 50}, {name: "lime", price: 10}])
// grąžins: {brangiausias: "lemonade", pigausias: "lime"}

const prekes = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
];

function getCheapestAndMostExpensive(arr) {
  const sorted = arr.sort((a, b) => a.price - b.price);
  const cheapest = sorted[0].name;
  const mostExpensive = sorted[sorted.length - 1].name;

  const result = {
    brangiausias: mostExpensive,
    pigiausias: cheapest,
  };

  return result;
}

const res = getCheapestAndMostExpensive(prekes);
console.log(res);

// Aptarnavimo eilės optimizavimas

// Jūs dirbate restorane ir turite optimizuoti užsakymų aptarnavimo eilę. Sukurkite funkciją optimizeQueue, kuri surikiuoja užsakymus pagal jų dydį (mažiausi pirmi). Kiekvienas užsakymas yra objektas, turintis id ir size savybes. Funkcija grąžina masyvą su surikiuotais užsakymų ID.

// Rezultatas

// console.log(optimizeQueue([{ id: 1, size: 5 }, { id: 2, size: 3 }, { id: 3, size: 8 }])); // [2, 1, 3]

const orders = [
  { id: 1, size: 5 },
  { id: 2, size: 3 },
  { id: 3, size: 8 },
];

const optimizeQueue = (arr) => arr.sort((a, b) => a.size - b.size).map((o) => o.id);

console.log(optimizeQueue(orders))

// Dažniausiai pasikartojantis
// Sukurkite funkciją findMostFrequent, kuri nustato ir grąžina dažniausiai pasitaikantį elementą masyve.

// Rezultatas


// console.log(findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3])); // 1

function findMostFrequent(arr) {
  // let mostFrequentNumber;
  // let mostFrequentAmount = 0;

  // arr.forEach((x) => {
  //   const filtered = arr.filter((y) => y === x);
  //   console.log(`x - ${x}, filtered: ${filtered}, length: ${filtered.length}`);

  //   if (filtered.length > mostFrequentAmount) {
  //     mostFrequentNumber = x;
  //     mostFrequentAmount = filtered.length
  //   }
  // })

  // return mostFrequentNumber;

  const groupedNumbers = {};

  arr.forEach((x) => {
    if (groupedNumbers[x]) {
      groupedNumbers[x].push(x);
    } else {
      groupedNumbers[x] = [x]
    }
  })
  const allNumbers = Object.values(groupedNumbers).sort((a, b) => b.length - a.length)
  console.log(allNumbers[0][0]);
}

console.log(findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3]))
