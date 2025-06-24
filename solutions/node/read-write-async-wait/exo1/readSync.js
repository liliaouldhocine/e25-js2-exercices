import fs from "fs";
import path from "path";

// Chemin absolu pour plus de fiabilité
const filePath = path.join(process.cwd(), "data", "users.json");

try {
  // 1. Lecture synchrone avec gestion d'erreur
  const data = fs.readFileSync(filePath, "utf-8");

  // 2. Parser le JSON
  const users = JSON.parse(data);

  // 3. Vérifier que c'est bien un tableau
  if (!Array.isArray(users)) {
    throw new Error("Le fichier JSON ne contient pas un tableau valide");
  }

  // 4. Afficher le premier utilisateur
  console.log("Premier utilisateur:", users[0]);
} catch (error) {
  if (error.code === "ENOENT") {
    console.error("Erreur: Fichier non trouvé");
  } else if (error instanceof SyntaxError) {
    console.error("Erreur: Fichier JSON invalide");
  } else {
    console.error("Erreur inattendue:", error.message);
  }
}
