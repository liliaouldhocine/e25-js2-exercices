// main.js
document.getElementById("btn").addEventListener("click", async () => {
  const { heavyCalculation } = await import("./heavy-module.js");
  heavyCalculation();
});
