const logMethod = (req, res, next) => {
  console.log(`Méthode: ${req.method}`);
  next();
};

const logPath = (req, res, next) => {
  console.log(`Chemin: ${req.path}`);
  next();
};

const logFullUrl = (req, res, next) => {
  console.log(`URL complète: ${req.protocol}://${req.get("host")}${req.url}`);
  next();
};

// Chaînage pour une route spécifique
app.get("/api/logs", logMethod, logPath, logFullUrl, (req, res) => {
  res.json({ logged: true });
});

// Résultat dans la console :

// Méthode: GET
// Chemin: /api/logs
// URL complète: http://localhost:3000/api/logs
