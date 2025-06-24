# **Cours complet sur le CRUD en JavaScript (Modules ES)**

---

## **📌 Introduction au CRUD**

### **Qu'est-ce que le CRUD ?**

- **Create** (POST) : Créer une ressource
- **Read** (GET) : Lire une/des ressources
- **Update** (PUT/PATCH) : Mettre à jour
- **Delete** (DELETE) : Supprimer

### **Technologies utilisées**

- Node.js + Express
- Syntaxe ES Modules (`import/export`)
- RESTful API design

---

## **🛠 Configuration Initiale**

```bash
mkdir crud-express && cd crud-express
npm init -y
npm install express
npm install --save-dev nodemon
```

**`package.json`**

```json
{
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

---

## **📝 1. Structure de Base (Serveur + Routeur)**

**`server.js`**

```javascript
import express from "express";
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json()); // Pour parser le JSON

// Routes
app.get("/", (req, res) => {
  res.send("API CRUD Opérationnelle !");
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
```

---

## **🔧 2. Modèle de Données**

**`models/Book.js`** _(Simulation DB avec tableau en mémoire)_

```javascript
let books = [
  { id: 1, title: "Le Petit Prince", author: "Saint-Exupéry" },
  { id: 2, title: "1984", author: "George Orwell" },
];

export const getAllBooks = () => books;

export const getBookById = (id) =>
  books.find((book) => book.id === parseInt(id));

export const addBook = (book) => {
  const newBook = { id: books.length + 1, ...book };
  books.push(newBook);
  return newBook;
};

export const updateBook = (id, updates) => {
  const index = books.findIndex((b) => b.id === parseInt(id));
  if (index === -1) return null;

  books[index] = { ...books[index], ...updates };
  return books[index];
};

export const deleteBook = (id) => {
  books = books.filter((b) => b.id !== parseInt(id));
};
```

---

## **🚀 3. Contrôleurs CRUD**

**`controllers/bookController.js`**

```javascript
import * as bookModel from "../models/Book.js";

// CREATE
export const createBook = (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required" });
  }
  const newBook = bookModel.addBook({ title, author });
  res.status(201).json(newBook);
};

// READ (ALL)
export const getAllBooks = (req, res) => {
  res.json(bookModel.getAllBooks());
};

// READ (ONE)
export const getBook = (req, res) => {
  const book = bookModel.getBookById(req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
};

// UPDATE
export const updateBook = (req, res) => {
  const updated = bookModel.updateBook(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: "Book not found" });
  res.json(updated);
};

// DELETE
export const deleteBook = (req, res) => {
  const exists = bookModel.getBookById(req.params.id);
  if (!exists) return res.status(404).json({ error: "Book not found" });

  bookModel.deleteBook(req.params.id);
  res.status(204).send(); // 204 = No Content
};
```

---

## **🔄 4. Routes**

**`routes/bookRoutes.js`**

```javascript
import { Router } from "express";
import * as bookController from "../controllers/bookController.js";

const router = Router();

router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBook);
router.post("/", bookController.createBook);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

export default router;
```

**Intégration dans `server.js`**

```javascript
import bookRouter from "./routes/bookRoutes.js";

// ... après les middlewares
app.use("/api/books", bookRouter);
```

---

## **✅ 5. Exercices Pas à Pas**

### **Exercice 1 : Implémenter un CRUD pour "Movies"**

1. Créez `models/Movie.js`
2. Ajoutez 5 routes CRUD
3. Testez avec Postman/Thunder Client

**Solution partielle** :

```javascript
// models/Movie.js
let movies = [{ id: 1, title: "Inception", director: "Nolan" }];

export const addMovie = (movie) => {
  const newMovie = {
    id: movies.length + 1,
    ...movie,
  };
  movies.push(newMovie);
  return newMovie;
};
```

---

### **Exercice 2 : Validation des Données**

Ajoutez une validation avec Zod :

```bash
npm install zod
```

**`middlewares/validateMovie.js`**

```javascript
import { z } from "zod";

const movieSchema = z.object({
  title: z.string().min(3),
  director: z.string().min(2),
  year: z.number().int().min(1900),
});

export const validateMovie = (req, res, next) => {
  try {
    movieSchema.parse(req.body);
    next();
  } catch (err) {
    res.status(400).json({ errors: err.errors });
  }
};
```

**Utilisation** :

```javascript
router.post("/", validateMovie, movieController.createMovie);
```

---

### **Exercice 3 : Gestion des Erreurs Centralisée**

**`middlewares/errorHandler.js`**

```javascript
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.code === "VALIDATION_ERROR") {
    return res.status(400).json(err);
  }

  res.status(500).json({ error: "Something broke!" });
};
```

**Dans le contrôleur** :

```javascript
export const createMovie = (req, res, next) => {
  try {
    // Logique métier...
  } catch (error) {
    error.code = "VALIDATION_ERROR";
    next(error); // Passe au middleware d'erreur
  }
};
```

---

## **🔍 Bonnes Pratiques**

1. **Séparation des responsabilités** :

   - Modèles : Accès aux données
   - Contrôleurs : Logique métier
   - Routes : Définition des endpoints

2. **Validation** :

   - Toujours valider les entrées (Zod, Joi, Yup)
   - Retourner des erreurs 400 pour les données invalides

3. **Statuts HTTP** :

   - 201 Created pour les créations
   - 204 No Content pour les suppressions
   - 404 Not Found pour les ressources absentes

4. **Sécurité** :
   - Toujours sanitizer les entrées
   - Utiliser `express-rate-limit` pour les APIs publiques

---

## **📚 Ressources Complémentaires**

- [Documentation Express](https://expressjs.com/)
- [Zod pour la validation](https://zod.dev/)
- [Postman pour tester les APIs](https://www.postman.com/)
