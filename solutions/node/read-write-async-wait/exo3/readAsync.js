import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

async function readUsers() {
  try {
    // 1. Lire le fichier de manière asynchrone
    const data = await fs.readFile(filePath, "utf-8");

    // 2. Parser le JSON
    const users = JSON.parse(data);

    // Validation
    if (!Array.isArray(users)) {
      throw new Error("Format de données invalide");
    }

    // 3. Afficher tous les utilisateurs
    console.log("Liste des utilisateurs:", users);

    return users;
  } catch (error) {
    if (error.code === "ENOENT") {
      // Fichier non trouvé - retourner un tableau vide
      console.log("Aucun utilisateur trouvé, retour d'un tableau vide");
      return [];
    }

    console.error("Erreur lors de la lecture:", error.message);
    throw error; // Propagation pour gestion ultérieure
  }
}

// Exemple d'utilisation avec IIFE (Immediately Invoked Function Expression)
(async () => {
  try {
    const users = await readUsers();
    console.log(`Nombre d'utilisateurs chargés: ${users.length}`);
  } catch (error) {
    console.error("Erreur dans le flux principal:", error.message);
  }
})();
