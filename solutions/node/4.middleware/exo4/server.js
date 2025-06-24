app.post("/api/users", validateUser, (req, res) => {
  // Code exécuté seulement si la validation réussit
  res.status(201).json(req.body);
});
