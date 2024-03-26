const h1 = document.getElementById("tekstas")
const elementsWithTestClass = document.getElementsByClassName("testas")
console.log(h1);
console.log(elementsWithTestClass);

const firstPar = document.querySelector(".testas");
const par = document.querySelector("p")

const allPar = document.querySelectorAll("p");

console.log(firstPar);
console.log(par);
console.log(allPar);

console.log(allPar[0]);

// Konvertuojam i tradicini array
const allParArr = [...allPar];

console.log(allParArr);

const div = document.querySelector("div");

const prevSibl = div.previousElementSibling;
const nextSibl = div.nextElementSibling;
const firstChild = div.firstElementChild;

console.log(prevSibl);
console.log(nextSibl);
console.log(firstChild);
console.log(div.parentNode);

const h3 = document.querySelector(".text")

console.log(h3.style.color);

h3.style.color = "green";

console.log(h3.classList);

h3.classList.add("bigText")

h3.classList.remove("text")

console.log(h3.classList.contains("text"))

const a = document.createElement("a")
a.classList.add("bigText");

a.textContent = "sitas elementas sukurtas js'e"
a.id = "manoSukurtasId"
console.log(a);

div.prepend(a)

const p = document.createElement("p");

p.textContent = "paragrafas sukuras jse";

div.append(p)

div.removeChild(document.querySelector("#manoSukurtasId"))

div.append("asdfasdf", "asdfasdfasdfasdf")

p.remove();

document.querySelector("#tekstas").remove();

const products = ["peinas", "alus", "bulka"];

const productsListElement = document.createElement("ul")

products.forEach((pr) => {
  const li = document.createElement("li");
  li.textContent = pr;

  productsListElement.append(li)
})

document.body.append(productsListElement)