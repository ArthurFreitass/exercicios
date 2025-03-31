// Acessando where-are-you

const where_are_you = document.querySelector("#where-are-you");

// Acessando o pai de where-are you

const parentFor_where = where_are_you.parentNode;

// Alterando a cor da fonte

parentFor_where.style.color = "red";

// ADD texto

document.querySelector("#first-child-of-child").innerText =
  "Antes sofria hoje sou fria - Sofia";

// Pegando first_child pelo parent

const parent = document.querySelector("#parent");
console.log(parent.firstElementChild);

// Pegando first-Child pelo where-are-you
console.log(where_are_you.previousElementSibling);

// Acessando texto pelo where-are-you
console.log(where_are_you.nextSibling);

// Acessando third-child pelo where-are-you

console.log(where_are_you.nextElementSibling);

// Acessando third-child pelo parent
console.log(parent.lastElementChild.previousElementSibling);
