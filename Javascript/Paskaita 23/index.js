const postsUrl = "https://jsonplaceholder.typicode.com/posts";

const button = document.querySelector("button");

async function postData() {
  const respose = await fetch(postsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "asgadsf",
      body: "kazkos body",
      userId: 20,
    }),
  });
  console.log(respose);
  const data = await respose.json();

  console.log(data);
}

button.addEventListener("click", postData);

const h1 = document.querySelector("h1");

h1.addEventListener("dblclick", () => console.log("double clicked"));

h1.addEventListener("mousedown", (e) => {
  e.target.style.fontSize = "50px";
});

h1.addEventListener("mouseup", (e) => {
  e.target.style.fontSize = "20px";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("enter clicked");
  }
});

const input = document.querySelector("input");

input.addEventListener("keydown", (e) => {
  // Padaro, kad eventas nenueitu per visus tevinius html elementus
  e.stopPropagation();

  if (e.key === "Enter") {
    console.log(e.target);
    console.log(e.target.value);
  }
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.target.value = "";
  }
});

let isHoldingKey = false;
document.addEventListener("keydown", function (event) {
  if (event.key === "Shift") {
    isHoldingKey = true;
    console.log("Shift key is being held down");
  }
});
document.addEventListener("keyup", function (event) {
  if (event.key === "Shift") {
    isHoldingKey = false;
    console.log("Shift key was released");
  }
});
document.addEventListener("mousemove", function (event) {
  if (isHoldingKey) {
    console.log("Shift key is being held down while mouse is moving");
  }
});

const flatContainer = document.querySelector("#flatContainer")
const buttonContainer = document.querySelector("#buttonContainer")

const response = await fetch("https://robust-safe-crafter.glitch.me/");

const entries = await response.json();

function generateEntries(ent) {
  ent.forEach((entr) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
  
    p.textContent = `${entr.description} ${entr.city}`;
  
    div.append(p);
  
    flatContainer.append(div)
  })
}

generateEntries(entries)

const differentCities = new Set(entries.map((e) => e.city));

differentCities.forEach((city) => {
  const button = document.createElement("button");
  button.textContent = city;

  button.addEventListener("click", () => {
    flatContainer.innerHTML = ""
    const filteredEntries = entries.filter((ent) => ent.city === city);
    generateEntries(filteredEntries)
  })

  buttonContainer.append(button)
})