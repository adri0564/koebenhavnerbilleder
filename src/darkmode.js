import "./style.css";

//referencer
const root = document.querySelector("html");
const btn = document.querySelector("#toggle-darkmode");

//toggle funktionalitet
function toggleTheme() {
  root.classList.toggle("dark");
}

//Klik-event
btn.addEventListener("click", toggleTheme);
