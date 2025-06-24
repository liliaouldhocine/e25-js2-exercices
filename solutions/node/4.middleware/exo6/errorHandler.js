export const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log l'erreur complète

  // Gestion des erreurs spécifiques
  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(413).json({ error: "Fichier trop volumineux" });
  }

  // Erreur générique
  res.status(500).json({
    error: err.message || "Erreur serveur",
  });
};
