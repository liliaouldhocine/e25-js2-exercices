import fs from "fs/promises";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "users.json");

router.get("/", async (req, res) => {
  try {
    const data = await fs.readFile(DATA_PATH, "utf-8");
    const users = JSON.parse(data);
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await fs.readFile(DATA_PATH, "utf-8");
    const users = JSON.parse(data);

    const newUser = {
      id: users.length + 1,
      ...req.body,
    };

    users.push(newUser);
    await fs.writeFile(DATA_PATH, JSON.stringify(users, null, 2));

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});
