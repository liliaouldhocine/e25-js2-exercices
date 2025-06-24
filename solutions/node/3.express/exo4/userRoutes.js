import { Router } from "express";
const router = Router();

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) return res.status(404).json({ error: "User not found" });

  res.json(user);
});

export default router;
