const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

// Adicionando o preventDefault

hrefLink.addEventListener("click", (event) => {
  event.preventDefault();
});

inputCheckbox.addEventListener("click", (event) => {
  event.preventDefault();
});

inputText.addEventListener("keypress", (event) => {
  if (event.key != "a") {
    event.preventDefault();
  }
});
