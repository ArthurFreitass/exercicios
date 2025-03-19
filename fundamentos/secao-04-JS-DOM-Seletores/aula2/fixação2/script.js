let header = document.querySelector("#header-container");
header.style.backgroundColor = "rgb(0, 176, 105)";

// HEADER

let emergency = document.querySelectorAll(".emergency-tasks div");

for (let index = 0; index < emergency.length; index += 1) {
  emergency[index].style.backgroundColor = "rgb(255, 159, 132)";
}

let emergency_back = document.querySelectorAll(".emergency-tasks h3");

for (let index = 0; index < emergency_back.length; index += 1) {
  emergency_back[index].style.backgroundColor = " rgb(165, 0, 243)";
  emergency_back[index].style.color = "white";
}
// TASK EMERGENCY

let no_emergency = document.querySelectorAll(".no-emergency-tasks div");

for (let index = 0; index < no_emergency.length; index += 1) {
  no_emergency[index].style.backgroundColor = " rgb(249, 219, 94)";
}

let no_emergency_back = document.querySelectorAll(".no-emergency-tasks h3");

for (let index = 0; index < emergency_back.length; index += 1) {
  no_emergency_back[index].style.backgroundColor = "rgb(35, 37, 37)";
  no_emergency_back[index].style.color = "white";
}

// TASK NO EMERGENCY

let footer = document.getElementById("footer-container");
footer.style.backgroundColor = "rgb(0, 53, 51";
footer.style.color = "white";
