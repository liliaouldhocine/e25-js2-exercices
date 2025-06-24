# Cours sur les Middlewares en Express.js (Type Module)

## Introduction aux Middlewares

### Objectifs du cours

1. Comprendre le concept de middleware
2. Savoir créer et utiliser des middlewares personnalisés
3. Maîtriser les middlewares essentiels d'Express
4. Apprendre à chaîner les middlewares efficacement

## Partie 1: Les Bases des Middlewares

### 1.1 Qu'est-ce qu'un middleware?

Un middleware est une fonction qui a accès aux objets:

- `request` (req)
- `response` (res)
- `next` (pour passer au middleware suivant)

```javascript
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Important pour continuer
};
```

### 1.2 Exercice 1: Premier middleware

**Objectif**: Créer un middleware basique qui loggue l'heure de la requête

```javascript
// middleware/timeLogger.js
export const timeLogger = (req, res, next) => {
  console.log(`Requête reçue à: ${new Date().toISOString()}`);
  next();
};

// server.js
import { timeLogger } from "./middleware/timeLogger.js";
app.use(timeLogger);
```

## Partie 2: Middlewares pour traiter la Request

### 2.1 Middlewares natifs d'Express

**Exercice 2**: Utilisation de `express.json()`

```javascript
import express from "express";
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

app.post("/api/data", (req, res) => {
  console.log(req.body); // Maintenant parsé
  res.json(req.body);
});
```

### 2.2 Middleware pour les données de formulaire

```javascript
app.use(express.urlencoded({ extended: true }));

app.post("/form", (req, res) => {
  console.log(req.body); // Données du formulaire
  res.send("Formulaire reçu");
});
```

## Partie 3: Middlewares personnalisés

### 3.1 Exercice 3: Middleware d'authentification

```javascript
// middleware/auth.js
export const authenticate = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token || token !== "SECRET_123") {
    return res.status(401).json({ error: "Non autorisé" });
  }

  next();
};

// Utilisation
import { authenticate } from "./middleware/auth.js";
app.get("/api/secret", authenticate, (req, res) => {
  res.json({ secret: "Données protégées" });
});
```

### 3.2 Exercice 4: Middleware de validation

```javascript
// middleware/validateUser.js
export const validateUser = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "Name et email sont requis",
    });
  }

  if (!email.includes("@")) {
    return res.status(400).json({
      error: "Email invalide",
    });
  }

  next();
};

// Utilisation
app.post("/api/users", validateUser, (req, res) => {
  // Traitement seulement si validation OK
});
```

## Partie 4: Chaînage de Middlewares

### 4.1 Exercice 5: Chaîne de middlewares

```javascript
const logRequest = (req, res, next) => {
  console.log(`[${new Date()}] ${req.method} ${req.url}`);
  next();
};

const addProcessingTime = (req, res, next) => {
  req.startTime = Date.now();
  next();
};

const calculateTime = (req, res, next) => {
  const duration = Date.now() - req.startTime;
  console.log(`Temps de traitement: ${duration}ms`);
  next();
};

app.get(
  "/api/stats",
  logRequest,
  addProcessingTime,
  calculateTime,
  (req, res) => {
    res.json({ status: "OK" });
  }
);
```

## Partie 5: Middlewares d'erreur

### 5.1 Exercice 6: Gestion d'erreur centralisée

```javascript
// middleware/errorHandler.js
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const status = err.status || 500;
  const message = err.message || "Erreur serveur";

  res.status(status).json({ error: message });
};

// Utilisation
app.get("/api/error", (req, res, next) => {
  try {
    // Simulation d'erreur
    throw new Error("Erreur test");
  } catch (err) {
    next(err); // Passe à errorHandler
  }
});

app.use(errorHandler); // Doit être le dernier middleware
```

## Bonnes Pratiques

1. **Organisation**:

   - Créez un dossier `middlewares/` pour les vôtres
   - Exportez/importez en modules ES

2. **Ordre important**:

   ```javascript
   app.use(express.json()); // D'abord
   app.use(middleware1);
   app.use(middleware2);
   app.use(errorHandler); // Toujours en dernier
   ```

3. **Performances**:

   - Évitez les opérations synchrones dans les middlewares
   - Utilisez `next()` sauf si vous terminez la requête

4. **Réutilisabilité**:

   - Paramétrez vos middlewares:

   ```javascript
   export const roleCheck = (role) => {
     return (req, res, next) => {
       if (req.user.role !== role) {
         return res.status(403).send("Interdit");
       }
       next();
     };
   };

   // Utilisation
   app.get("/admin", roleCheck("admin"), adminController);
   ```
