const app = document.getElementById("app");
app.innerHTML = "<h1>Bonjour, Vite !</h1>";

const button = document.createElement("button");
button.textContent = "Cliquez-moi";
button.addEventListener("click", () => {
  app.innerHTML = "<h1>Texte changé !</h1>";
});
document.body.appendChild(button);
