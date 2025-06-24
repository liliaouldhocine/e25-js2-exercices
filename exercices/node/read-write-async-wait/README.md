# Exercices sur la lecture/écriture de fichiers JSON en JavaScript (modules)

Voici une série d'exercices progressifs pour maîtriser la manipulation de fichiers JSON en JavaScript, avec une attention particulière sur les aspects synchrone et asynchrone.

## Prérequis

- Node.js installé
- Compréhension de base de JavaScript
- Connaissance des promesses et async/await

## Configuration initiale

Créez un projet avec cette structure:

```
json-exercices/
├── data/
│   ├── users.json
│   └── products.json
├── sync/
├── async/
└── package.json
```

Dans `package.json`, ajoutez `"type": "module"` pour utiliser les modules ES.

## Exercice 1: Lecture synchrone basique

**Objectif**: Lire un fichier JSON de manière synchrone

1. Créez `sync/readSync.js`:

```javascript
import fs from "fs";

// 1. Lire le fichier users.json de manière synchrone
const data = fs.readFileSync("./data/users.json", "utf-8");

// 2. Parser le JSON
const users = JSON.parse(data);

// 3. Afficher le premier utilisateur
console.log("Premier utilisateur:", users[0]);
```

**Questions**:

- Que se passe-t-il si le fichier n'existe pas?
- Comment pourriez-vous gérer cette erreur?

## Exercice 2: Écriture synchrone

**Objectif**: Écrire dans un fichier JSON de manière synchrone

1. Créez `sync/writeSync.js`:

```javascript
import fs from "fs";

const newUser = {
  id: 3,
  name: "Nouvel Utilisateur",
  email: "nouveau@example.com",
};

// 1. Lire les utilisateurs existants
const data = fs.readFileSync("./data/users.json", "utf-8");
const users = JSON.parse(data);

// 2. Ajouter le nouvel utilisateur
users.push(newUser);

// 3. Écrire le tableau mis à jour
fs.writeFileSync("./data/users.json", JSON.stringify(users, null, 2));

console.log("Utilisateur ajouté avec succès!");
```

**Questions**:

- À quoi sert le `null, 2` dans `JSON.stringify`?
- Comment pourriez-vous vérifier que l'écriture a réussi?

## Exercice 3: Lecture asynchrone avec promesses

**Objectif**: Utiliser fs.promises pour une lecture asynchrone

1. Créez `async/readAsync.js`:

```javascript
import fs from "fs/promises";

async function readUsers() {
  try {
    // 1. Lire le fichier avec fs.promises
    const data = await fs.readFile("./data/users.json", "utf-8");

    // 2. Parser le JSON
    const users = JSON.parse(data);

    // 3. Afficher tous les utilisateurs
    console.log("Liste des utilisateurs:", users);

    return users;
  } catch (error) {
    console.error("Erreur lors de la lecture:", error);
    throw error;
  }
}

// Appeler la fonction
readUsers();
```

**Questions**:

- Pourquoi utilise-t-on `await` ici?
- Comment pourriez-vous utiliser cette fonction dans un autre module?

## Exercice 4: Écriture asynchrone avec async/await

**Objectif**: Écrire de manière asynchrone avec gestion d'erreur

1. Créez `async/writeAsync.js`:

```javascript
import fs from "fs/promises";

async function addProduct(newProduct) {
  try {
    // 1. Lire les produits existants
    const data = await fs.readFile("./data/products.json", "utf-8");
    const products = JSON.parse(data);

    // 2. Ajouter le nouveau produit
    products.push(newProduct);

    // 3. Écrire les produits mis à jour
    await fs.writeFile(
      "./data/products.json",
      JSON.stringify(products, null, 2)
    );

    console.log("Produit ajouté avec succès!");
    return true;
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit:", error);
    return false;
  }
}

// Exemple d'utilisation
const monProduit = {
  id: 101,
  name: "Nouveau Produit",
  price: 29.99,
};

addProduct(monProduit);
```

**Exercice**:
Modifiez la fonction pour générer un ID automatique si aucun ID n'est fourni.

## Exercice 5: Combiner lecture et écriture

**Objectif**: Créer une fonction utilitaire complète

1. Créez `async/userManager.js`:

```javascript
import fs from "fs/promises";

const USER_FILE = "./data/users.json";

async function getUsers() {
  try {
    const data = await fs.readFile(USER_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      // Si le fichier n'existe pas, retourner un tableau vide
      return [];
    }
    throw error;
  }
}

async function saveUsers(users) {
  await fs.writeFile(USER_FILE, JSON.stringify(users, null, 2));
}

async function addUser(user) {
  const users = await getUsers();
  users.push(user);
  await saveUsers(users);
  return user;
}

async function getUserById(id) {
  const users = await getUsers();
  return users.find((u) => u.id === id);
}

export { getUsers, addUser, getUserById };
```

**Exercice**:

1. Ajoutez une fonction `updateUser(id, updates)`
2. Ajoutez une fonction `deleteUser(id)`
3. Créez un fichier `main.js` qui utilise ces fonctions

## Exercice avancé: Gestion de fichiers plus complexes

**Objectif**: Travailler avec des données relationnelles

1. Créez `async/orderManager.js`:

```javascript
import fs from "fs/promises";

const ORDERS_FILE = "./data/orders.json";
const USERS_FILE = "./data/users.json";

async function getOrders() {
  const data = await fs.readFile(ORDERS_FILE, "utf-8");
  return JSON.parse(data);
}

async function getUsers() {
  const data = await fs.readFile(USERS_FILE, "utf-8");
  return JSON.parse(data);
}

async function getUserOrders(userId) {
  try {
    // Utilisation de Promise.all pour paralléliser les lectures
    const [orders, users] = await Promise.all([getOrders(), getUsers()]);

    const user = users.find((u) => u.id === userId);
    if (!user) throw new Error("Utilisateur non trouvé");

    const userOrders = orders.filter((o) => o.userId === userId);

    return {
      user,
      orders: userOrders,
    };
  } catch (error) {
    console.error("Erreur:", error);
    throw error;
  }
}
```

**Exercice**:

1. Ajoutez une fonction pour créer une commande
2. Implémentez une validation pour vérifier que l'utilisateur existe

## Bonnes pratiques à retenir

1. **Toujours utiliser async/await** pour les opérations de fichier en production
2. **Toujours gérer les erreurs** avec try/catch
3. **Valider les données** avant de les écrire
4. **Utiliser des chemins absolus** ou bien gérer les chemins relatifs
5. **Sérialiser proprement** avec JSON.stringify et une indentation
6. **Éviter les lectures/écritures inutiles** en mémoire

Ces exercices couvrent les concepts fondamentaux et progressent vers des scénarios plus complexes. Pour chaque exercice, encouragez les étudiants à:

1. Implémenter la solution de base
2. Ajouter la gestion d'erreurs
3. Modulariser le code
4. Tester avec différents cas (fichier existant/non-existant, données valides/invalides)
