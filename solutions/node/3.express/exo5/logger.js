export const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

export const auth = (req, res, next) => {
  // Vérification basique d'un token
  const token = req.headers["authorization"];

  if (!token || token !== "secret123") {
    return res.status(401).json({ error: "Non autorisé" });
  }

  next();
};
