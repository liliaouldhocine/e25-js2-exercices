# **Introduction à Express.js avec Node.js (type module)**

### **Cours Progressif**

Les exercices sont conçus pour une progression en douceur, avec des exemples pratiques.

---

## **📌 1. Introduction à Express.js**

### **Qu'est-ce qu'Express ?**

- **Framework web** pour Node.js, minimaliste et flexible.
- Permet de créer des **API REST** et des **applications web**.
- Simplifie la gestion des **routes**, **requêtes HTTP** et **middlewares**.

### **Pourquoi utiliser Express ?**

✔ Plus simple que le module `http` natif de Node.  
✔ Grande communauté et nombreux plugins (`middlewares`).  
✔ Idéal pour les débutants en backend.

---

## **🛠 2. Configuration Initiale**

### **Création du projet**

```bash
mkdir express-intro
cd express-intro
npm init -y
npm install express
```

### **Modifier `package.json` pour utiliser les modules ES**

```json
{
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

> **Astuce** : Installer `nodemon` pour le rechargement automatique :
>
> ```bash
> npm install --save-dev nodemon
> ```

---

## **🚀 3. Premier Serveur Express (Exercice 1)**

### **`server.js`**

```javascript
import express from "express";

const app = express();
const PORT = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Route GET de base
app.get("/", (req, res) => {
  res.send("Bienvenue sur mon API Express !");
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
```

### **Tester le serveur**

```bash
npm run dev
```

➡ **Objectif** : Vérifier que `http://localhost:3000` affiche le message.

---

## **📝 4. Exercices Progressifs**

### **Exercice 2 : Créer une route POST**

Ajouter une route pour recevoir des données :

```javascript
app.post("/api/users", (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  res.status(201).json({ message: "Utilisateur créé", user: newUser });
});
```

**Test avec Postman/Thunder Client (VS Code)** :

- Envoyer une requête POST avec un body JSON (`{ "name": "Alice" }`).

---

### **Exercice 3 : Gestion des erreurs**

Ajouter une gestion d'erreur basique :

```javascript
// Route avec paramètre
app.get("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  if (isNaN(userId)) {
    return res.status(400).json({ error: "ID invalide" });
  }
  res.json({ id: userId, name: "Alice" });
});
```

**Test** :

- `GET /api/users/abc` → Doit renvoyer une erreur 400.

---

### **Exercice 4 : Utilisation d'un Router**

Créer un fichier `routes/userRoutes.js` :

```javascript
import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json([{ id: 1, name: "Alice" }]);
});

export default router;
```

**Modifier `server.js`** :

```javascript
import userRoutes from "./routes/userRoutes.js";

app.use("/api/users", userRoutes);
```

➡ **Objectif** : Structurer le code en séparant les routes.

---

### **Exercice 5 : Middleware personnalisé**

Créer un middleware pour logger les requêtes :

```javascript
// middleware/logger.js
export const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
```

**Utilisation dans `server.js`** :

```javascript
import { logger } from "./middleware/logger.js";
app.use(logger);
```

**Test** : Vérifier dans la console que chaque requête est loguée.

---

### **Exercice 6 : Connexion à une "fausse" DB (JSON)**

Créer un fichier `data/users.json` :

```json
[{ "id": 1, "name": "Alice" }]
```

**Modifier `userRoutes.js`** :

```javascript
import fs from "fs/promises";

router.get("/", async (req, res) => {
  const data = await fs.readFile("./data/users.json", "utf-8");
  res.json(JSON.parse(data));
});
```

➡ **Objectif** : Montrer comment Express peut interagir avec des fichiers.
