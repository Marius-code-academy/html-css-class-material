const phoneEndpoint = 'http://127.0.0.1:4000/phone';

const tBody = document.querySelector("tbody");

const form = document.querySelector("form");
const brandInput = document.querySelector("#brand");
const modelInput = document.querySelector("#model");
const priceInput = document.querySelector("#price");
const yearInput = document.querySelector("#year")


async function getPhones() {
  const response = await fetch(phoneEndpoint);
  const data = await response.json();

  return data
}

function generateTbody(phones) {
  tBody.innerHTML = ""

  const phoneTrs = phones.map((phone) => {
    const tr = document.createElement("tr");

    const tdBrand = document.createElement("td");
    tdBrand.textContent = phone.brand;

    const tdModel = document.createElement("td");
    tdModel.textContent = phone.model;

    const tdPrice = document.createElement("td");
    tdPrice.textContent = phone.price;

    const tdYear = document.createElement("td")
    tdYear.textContent = phone.year;

    const tdDelete = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"

    deleteButton.addEventListener("click", async () => {
      const response = await fetch(phoneEndpoint + `/${phone._id}`, {
        method: "DELETE"
      })

      if (response.ok) {
        const ph = await getPhones();
        generateTbody(ph)
      }
    })

    tdDelete.append(deleteButton)

    tr.append(tdBrand, tdModel, tdPrice, tdYear, tdDelete);

    return tr;
  })

  tBody.append(...phoneTrs)
}


const phones = await getPhones();
console.log(phones);

generateTbody(phones)

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const brand = brandInput.value;
  const model = modelInput.value;
  const price = priceInput.value;
  const year = yearInput.value;

  const response = await fetch(phoneEndpoint, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      brand,
      model,
      price,
      year
    })
  }) 

  if (response.ok) {
    const phones = await getPhones();

    generateTbody(phones)
  }
})