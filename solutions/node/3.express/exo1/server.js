import express from "express";

const app = express();
const PORT = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Route GET de base
app.get("/", (req, res) => {
  res.send("Bienvenue sur mon API Express !");
});

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).json({ message: "Route non trouvée" });
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Erreur serveur" });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});

// Points clés :

// - `express.json()` est nécessaire pour parser les requêtes POST
// - La gestion d'erreurs de base est déjà implémentée
// - Le serveur écoute sur le port 3000
