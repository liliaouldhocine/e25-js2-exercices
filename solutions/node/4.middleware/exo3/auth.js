export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token manquant ou invalide" });
  }

  const token = authHeader.split(" ")[1];

  // En production, utiliser JWT ou une vérification réelle
  if (token !== "SECRET_123") {
    return res.status(403).json({ error: "Token invalide" });
  }

  // Simulation d'un utilisateur
  req.user = { id: 1, role: "admin" };
  next();
};
