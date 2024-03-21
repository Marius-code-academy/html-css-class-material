class Car {
  #drowned = false;

  constructor(year, type) {
    this.year = year;
    this.type = type;
  }

  getDrowned() {
    return this.#drowned;
  }

  setDrowned(newValue) {
    if (typeof newValue !== "boolean") {
      console.log("negera reiksme");
    } else {
      this.#drowned = newValue;
    }
  }

  getDescription() {
    console.log(`year: ${this.year} type: ${this.type} drowned: ${this.#drowned}`);
  }
}

const bmw = new Car(2000, "asdf");
const vw = new Car(2010, "fsdfsdf");

console.log(bmw.type);

console.log(bmw.drowned);
bmw.setDrowned(true);
console.log(bmw.getDrowned());

bmw.getDescription();
vw.getDescription();

class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

class Triangle extends Shape {
  constructor(color, size) {
    super(color);
    this.size = size;
  }

  getSize() {
    return this.size;
  }
}

const tr = new Triangle("red", 20);

console.log(tr.getColor());
console.log(tr.getSize());

// Inventoriaus valdymas

// Sukurkite funkciją updateInventory, kuri priima esamą inventoriaus objektą ir pakeitimų masyvą. Kiekvienas pakeitimas yra objektas su item (prekės pavadinimu), change (kaitos kiekiu; gali būti neigiamas, jei prekė yra šalinama) ir action ("add" arba "remove"). Funkcija turėtų atnaujinti inventorių pagal pateiktus pakeitimus.

// Rezultatas

// console.log(updateInventory({ "apples": 5, "bananas": 8 }, [{ item: "apples", change: 3, action: "add" }, { item: "bananas", change: 2, action: "remove" }]));
// // { "apples": 8, "bananas": 6 }

const inventory = { apples: 5, bananas: 8 };
const changes = [
  { item: "apples", change: 3, action: "add" },
  { item: "bananas", change: 2, action: "remove" },
];

function updateInventory(inventory, changes) {
  const inventoryCopy = { ...inventory };

  changes.forEach((ch) => {
    if (ch.action === "add") {
      inventoryCopy[ch.item] += ch.change;
    }
    if (ch.action === "remove") {
      inventoryCopy[ch.item] -= ch.change;
    }
  });
  return inventoryCopy;
}

const updated = updateInventory(inventory, changes);

console.log(updated);
console.log(
  updateInventory({ apples: 5, bananas: 8 }, [
    { item: "apples", change: 3, action: "add" },
    { item: "bananas", change: 2, action: "remove" },
  ]),
);

// Studentų grupių balai
// Jūsų užduotis - sukurti funkciją countAverages, kuri priima objektą, turintį studentų grupių pavadinimus kaip raktus ir studentų egzaminų balų masyvus kaip reikšmes. Funkcija turėtų grąžinti naują objektą su kiekvienos grupės vidurkiu.

// Rezultatas

// console.log(countAverages({ "Group A": [80, 90, 100], "Group B": [70, 80, 90] }));
// // { "Group A": 90, "Group B": 80 }

const groups = { "Group A": [80, 90, 100], "Group B": [70, 80, 90] };

function countAverages(group) {
  const groupsCopy = { ...group };
  const keys = Object.keys(groupsCopy);

  keys.forEach((key) => {
    groupsCopy[key] = groupsCopy[key].reduce((acc, cur) => acc + cur) / groupsCopy[key].length;
  });

  return groupsCopy;
}

console.log(countAverages(groups));

// Knygų paieška

// Parašykite funkciją surastiKnygasPagalPavadinima, kuri ieško visų knygų, kurių pavadinimai atitinka (arba dalinai atitinka) nurodytą paieškos terminą. Paieška taip pat turėtų būti case-insensitive. Knygos yra pateiktos kaip objektų masyvas su savybėmis title ir author. Funkcija priima knygos pavadinimo paieškos terminą kaip argumentą ir grąžina visas atitinkamas knygas.

// Rezultatas

// console.log(findBook([{ title: "Haris Poteris ir išminties akmuo", author: "J.K. Rowling" }, { title: "Hobitas", author: "J.R.R. Tolkien" }], "Poteris"));

const books = [
  { title: "Haris Poteris ir išminties akmuo", author: "J.K. Rowling" },
  { title: "Hobitas", author: "J.R.R. Tolkien" },
];

function findBook(booksArr, search) {
  return booksArr.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()));
}

console.log(findBook(books, "poteris"));

// Darbuotojų ataskaita
// Sukurkite funkciją printEmployeeInfo, kuri priima objektą, kuriame yra darbuotojų vardai kaip raktai ir jų pareigos kaip reikšmės. Funkcija turi atspausdinti kiekvieno darbuotojo vardą ir pareigas.

// Rezultatas


// printEmployeeInfo({ "Jonas": "Engineer", "Petras": "Manager" });
// // "Name: Jonas, Position: Engineer"
// // "Name: Petras, Position: Manager"
 
const employee = { "Jonas": "Engineer", "Petras": "Manager" };

function printEmployeeInfo(obj) {
  const entries = Object.entries(obj);
  entries.forEach((e) => {
    console.log(`Name: ${e[0]}, Position: ${e[1]}`);
  })
}

printEmployeeInfo(employee)