document.getElementById("page-title").innerText = "Piratas do Caribe";

document.getElementById("first-paragraph").innerText =
  "Pirates of the Caribbean é uma série de filmes de fantasia e aventura, baseadas no brinquedo Pirates of the Caribbean dos parques temáticos da Walt Disney Parks and Resorts iniciada em 2003.";

document.getElementById("subtitle").innerText = "Principais informações";

document.getElementById("second-paragraph").innerText =
  "Direção: Algum gringo, Roteirista: Algum gringo";

let font_paragraph_1 = document.getElementsByClassName("paragraph-style")[0];

font_paragraph_1.style.fontStyle = "italic";

let color_subtitle = document.getElementsByTagName("h2")[0];

color_subtitle.style.color = "red";
