const form = document.querySelector("form");
const makeInput = document.querySelector("#make")
const yearInput = document.querySelector("#year")

form.addEventListener("submit", sendCar)

async function getCars() {
  const response = await fetch("http://127.0.0.1:3000");
  const cars = await response.json();

  console.log(cars);
}

async function sendCar(e) {
  e.preventDefault();
  const make = makeInput.value;
  const year = yearInput.value;

  const response = await fetch("http://127.0.0.1:3000", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      make: make,
      year: year,
    })
  })
  console.log(response);
}

getCars()