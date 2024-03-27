const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", (e) => {
  console.log(e.target);
  console.log("mygtukas paspaustas");
});

button.addEventListener("mouseover", () => {
  console.log("pele virs mygtuko");
});

button.addEventListener("mouseleave", (event) => {
  console.log("pelyte isejo");
});

const h1 = document.querySelector("h1");

input.addEventListener("input", (e) => {
  console.log(e.target.value);
  h1.textContent = e.target.value;
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit happened");
});

function showTooltip(event, text) {
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.innerText = text;
  tooltip.style.top = event.pageY + 10 + "px";
  tooltip.style.left = event.pageX + 10 + "px";
  document.body.appendChild(tooltip);
}
function hideTooltip() {
  const tooltip = document.querySelector(".tooltip");
  if (tooltip) {
    tooltip.remove();
  }
}

const a = document.querySelector("#aHover");

a.addEventListener("mouseover", (e) => {
  const tooltip = document.createElement("div");
  tooltip.textContent = "Kazkoks tekstas";
  tooltip.style.position = "absolute";
  tooltip.style.top = `${e.pageY}px`;
  tooltip.style.left = `${e.pageX}px`;
  tooltip.classList.add("tooltip");

  document.body.append(tooltip);
});

a.addEventListener("mouseleave", () => {
  const tooltip = document.querySelector(".tooltip");
  tooltip.remove();
});

const counterP = document.querySelector("p");
const incrementButton = document.querySelector("#incrementButton");
const decrementButton = document.querySelector("#decrementButton");

decrementButton.addEventListener("click", () => {
  counterP.textContent = +counterP.textContent - 1;
});

incrementButton.addEventListener("click", () => {
  counterP.textContent = +counterP.textContent + 1;
});

const imageSources = [
  "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Tabby_cat_with_visible_nictitating_membrane.jpg/220px-Tabby_cat_with_visible_nictitating_membrane.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg",
];

const nextImageButton = document.querySelector("#next");
const previousImageButton = document.querySelector("#previous");
const image = document.querySelector("img");

let currentImageIndex = 0;

nextImageButton.addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex > imageSources.length - 1) {
    currentImageIndex = 0;
  }

  image.src = imageSources[currentImageIndex];
});

previousImageButton.addEventListener("click", () => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = imageSources.length - 1;
  }

  image.src = imageSources[currentImageIndex];
})