// Mock database
let users = [];

app.post("/api/users", (req, res) => {
  // Validation basique
  if (!req.body.name) {
    return res.status(400).json({ error: "Le champ 'name' est requis" });
  }

  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});
