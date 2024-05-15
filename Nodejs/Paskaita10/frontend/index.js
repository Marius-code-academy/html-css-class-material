const productsEndpoint = "http://127.0.0.1:3000/products";

const tbody = document.querySelector("tbody");
const updateForm = document.querySelector("form");
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");

let productToUpdateId = "";

updateForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch(productsEndpoint + `/${productToUpdateId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: titleInput.value, description: descriptionInput.value }),
  });

  if (response.ok) {
    refreshTable()
  }

});

async function getProducts() {
  const response = await fetch(productsEndpoint);
  const data = await response.json();

  return data;
}
 
 async function refreshTable() {
  const pr = await getProducts();
  tbody.innerHTML = "";
  tbody.append(...generateTableData(pr));
}

function generateTableData(products) {
  const trs = products.map((product) => {
    const tr = document.createElement("tr");

    const tdTitle = document.createElement("td");
    tdTitle.textContent = product.title;

    const tdDescription = document.createElement("td");
    tdDescription.textContent = product.description;

    const tdAmount = document.createElement("td");
    const p = document.createElement("p");
    p.textContent = product.amount;

    async function buttonHandler(action) {
      let newAmount = product.amount;

      if (action === "increment") {
        newAmount++;
      } else {
        newAmount--;
      }

      const response = await fetch(productsEndpoint + `/${product._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ amount: newAmount }),
      });

      if (response.ok) {
        refreshTable()
      }
    }

    const decrementButton = document.createElement("button");
    decrementButton.textContent = "-";

    decrementButton.addEventListener("click", () => buttonHandler("decrement"));

    const incrementButton = document.createElement("button");
    incrementButton.textContent = "+";

    incrementButton.addEventListener("click", () => buttonHandler("increment"));

    tdAmount.append(decrementButton, p, incrementButton);

    const tdUpdate = document.createElement("td");

    const updateButton = document.createElement("button");
    updateButton.textContent = "select";

    updateButton.addEventListener("click", () => {
      productToUpdateId = product._id;
      titleInput.value = product.title;
      descriptionInput.value = product.description;
    });

    tdUpdate.append(updateButton);

    tr.append(tdTitle, tdDescription, tdAmount, tdUpdate);

    return tr;
  });

  return trs;
}

refreshTable()