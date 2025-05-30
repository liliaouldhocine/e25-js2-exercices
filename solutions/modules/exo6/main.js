// main.js
document.getElementById("btn").addEventListener("click", async () => {
  try {
    const module = await import("./missing-module.js");
  } catch (e) {
    console.error("Module introuvable :", e);
  }
});
