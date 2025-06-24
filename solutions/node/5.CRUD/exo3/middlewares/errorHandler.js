export const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log technique

  // Gestion des erreurs de validation
  if (err.name === "ValidationError") {
    return res.status(400).json({
      type: "VALIDATION_ERROR",
      errors: err.errors,
    });
  }

  // Erreur 404 custom
  if (err.message === "NOT_FOUND") {
    return res.status(404).json({ error: "Ressource non trouvée" });
  }

  // Erreur serveur générique
  res.status(500).json({
    error: "Erreur interne du serveur",
    details: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};
