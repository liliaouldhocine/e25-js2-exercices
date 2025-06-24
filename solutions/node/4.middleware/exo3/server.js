app.get("/api/admin", authenticate, (req, res) => {
  res.json({ message: `Bienvenue admin ${req.user.id}` });
});
