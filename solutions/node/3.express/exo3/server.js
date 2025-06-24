app.get("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  if (isNaN(userId)) {
    return res.status(400).json({
      error: "ID doit être un nombre",
      received: req.params.id,
    });
  }

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: "Utilisateur non trouvé" });
  }

  res.json(user);
});
