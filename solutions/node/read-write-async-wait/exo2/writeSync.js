import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

const newUser = {
  id: 3,
  name: "Nouvel Utilisateur",
  email: "nouveau@example.com",
};

try {
  // 1. Lire les utilisateurs existants
  const data = fs.readFileSync(filePath, "utf-8");
  const users = JSON.parse(data);

  // Validation des données
  if (!Array.isArray(users)) {
    throw new Error("Données existantes invalides");
  }

  // 2. Vérifier si l'utilisateur existe déjà
  const userExists = users.some((user) => user.id === newUser.id);
  if (userExists) {
    throw new Error("Un utilisateur avec cet ID existe déjà");
  }

  // 3. Ajouter le nouvel utilisateur
  users.push(newUser);

  // 4. Écrire le tableau mis à jour
  // Le troisième argument (2) indente le JSON pour une meilleure lisibilité
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  console.log("Utilisateur ajouté avec succès!");
} catch (error) {
  console.error("Erreur lors de l'écriture:", error.message);
}
