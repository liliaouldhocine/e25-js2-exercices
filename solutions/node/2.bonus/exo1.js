// Solution
const fs = require("fs");

fs.readFile("config.json", "utf8", (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error("Fichier non trouvé !");
    } else {
      console.error("Erreur inattendue :", err);
    }
    return;
  }

  try {
    const config = JSON.parse(data);
    console.log("Config chargée :", config);
  } catch (parseErr) {
    console.log(JSON.stringify({ error: "Invalid JSON" }));
  }
});
