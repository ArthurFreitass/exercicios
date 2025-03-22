// Utilizando o DOM

document.getElementById("blue-lock").innerText = "I am the best";

document.getElementsByClassName("link")[0].innerText = "Receba";

const font_style = document.getElementsByTagName("p");

// Alteramos diretamente na linha um elemento em específico, do contrário caso queiramos alterar uma lista vamos usar um loop

for (let index = 0; index < font_style.length; index += 1) {
  font_style[index].style.fontStyle = "italic";
}

// querySelector

document.querySelector(".main .section-contents ul li a").style.color =
  "purple";

// querySelectorAll

let color_p = document.querySelectorAll("p");

for (let index = 0; index < color_p.length; index++) {
  color_p[index].style.color = "crimson";
}
