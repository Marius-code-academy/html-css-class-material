const postsEndpoint = "https://jsonplaceholder.typicode.com/posts";

fetch(postsEndpoint)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

const showUsersButton = document.querySelector("button");
const userList = document.querySelector("ul");

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
}

async function displayUsers() {
  const users = await getUsers();

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.name} location: ${user.address.geo.lat}, ${user.address.geo.lng}`;
    userList.append(li);
  });
}

showUsersButton.addEventListener("click", displayUsers);

const todosUrl = "https://jsonplaceholder.typicode.com/todos";

const todosButton = document.querySelector("#todosButton");
const tableBody = document.querySelector("tbody");

async function getTodos() {
  const response = await fetch(todosUrl);
  const data = await response.json();

  return data;
}

async function addTodosToTable() {
  const todos = await getTodos();
  const todosElements = todos.map((todo) => {
    const tr = document.createElement("tr");
    const tdTitle = document.createElement("td")
    const tdIsComplete = document.createElement("td")

    tdTitle.textContent = todo.title;
    tdIsComplete.textContent = todo.completed;

    tr.append(tdTitle, tdIsComplete);

    return tr;
  })

  tableBody.append(...todosElements)
}

todosButton.addEventListener("click", addTodosToTable)