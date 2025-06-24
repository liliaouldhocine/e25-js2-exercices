export const timeLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  req.requestTime = new Date(); // Ajoute un timestamp à la requête
  next(); // Nécessaire pour continuer
};
