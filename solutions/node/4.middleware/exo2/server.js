import express from "express";
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

app.post("/api/books", (req, res) => {
  // req.body est maintenant automatiquement parsé
  if (!req.body.title) {
    return res.status(400).json({ error: "Title is required" });
  }
  res.json({ id: 1, ...req.body });
});
