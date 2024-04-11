document.cookie = "name=marius; expires=" + new Date(2100, 5, 10).toUTCString();

document.cookie = "lastName=Pavarde";

console.log(document.cookie);

function getCookie(key) {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const keyValue = cookies[i].trim().split("=");
    console.log(keyValue);
    if (keyValue[0] === key) {
      return keyValue[1];
    }
  }
  console.log(cookies);
}

console.log(getCookie("name"));

// localStorage.setItem("name", "Marius")
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");

// sessionStorage.setItem("sessionsStorageName", "kazkoks vardas")
const button = document.querySelector("button");

button.addEventListener("click", () => {
  localStorage.setItem("labas", "labas")
})

window.addEventListener("storage", function (event) {
  console.log(
    "The value for " + event.key + " changes from " + event.oldValue + " to " + event.newValue,
  );
});
