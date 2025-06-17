# **Introduction Approfondie à Node.js : Histoire, Fondamentaux et Pratique**

## **I. Contexte Historique : Pourquoi Node.js a-t-il été créé ?**

### **1. Les Limites du Modèle Traditionnel (Pré-2009)**

Avant Node.js, les serveurs web fonctionnaient majoritairement sur un **modèle bloquant** :

- **Un thread par requête** (Apache, PHP, Java Servlets) → Gaspillage de ressources.
- **Problème du C10K** : Difficulté à gérer 10 000 connexions simultanées.
- **JavaScript côté navigateur uniquement**, sans accès au système de fichiers ou réseau.

### **2. La Révolution Node.js (2009)**

Créé par **Ryan Dahl**, Node.js apporte deux innovations majeures :

1. **Moteur V8 de Google** : Exécute JS à vitesse native en dehors du navigateur.
2. **Boucle d’événements (Event Loop)** : Modèle **non-bloquant** et asynchrone pour gérer des milliers de connexions avec un seul thread.

**Besolu résolu** :  
→ Permettre à JavaScript de devenir un langage **full-stack**.  
→ Optimiser les applications **I/O-bound** (APIs, chats, streaming).

---

## **II. Introduction Progressive à Node.js (Vanilla JS)**

### **1. Installation et Premier Script**

#### **Sur Linux/macOS (Terminal)**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
nvm install 18
node -v  # Vérifie la version
```

#### **Premier Fichier (`hello.js`)**

```javascript
// hello.js
console.log("Bonjour, Node.js !");
process.stdout.write("Utilisez 'process' pour interagir avec l'OS.\n");

// Exécutez avec : node hello.js
```

**Explications** :

- `process` : Objet global pour interagir avec le système (arguments, variables d’env, etc.).
- Pas de DOM ni de `window` → JS **côté serveur**.

---

### **2. Modules CommonJS (Sans NPM)**

#### **Création d’un Module (`math.js`)**

```javascript
// math.js
function add(a, b) {
  return a + b;
}

module.exports = { add }; // Export explicite
```

#### **Utilisation (`app.js`)**

```javascript
// app.js
const { add } = require("./math"); // Import relatif

console.log(add(2, 3)); // 5
```

**Points Clés** :

- `require()` est synchrone et résout les chemins relatifs.
- `module.exports` définit ce que le module expose.

---

### **3. Interaction avec le Système (Fichiers, Réseau)**

#### **Lire un Fichier (`fs.readFile`)**

```javascript
// readFile.js
const fs = require("fs");

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data); // Contenu du fichier
});
```

#### **Serveur HTTP Natif (`http.createServer`)**

```javascript
// server.js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Réponse du serveur !");
});

server.listen(3000, () => {
  console.log("Serveur démarré sur http://localhost:3000");
});
```

**Pourquoi c’est puissant ?**  
→ Aucune dépendance externe.  
→ Contrôle total sur les requêtes/réponses.

---

### **4. Gestion des Arguments CLI**

#### **Récupérer des Arguments (`process.argv`)**

```javascript
// args.js
const [nodePath, scriptPath, name] = process.argv;
console.log(`Bonjour, ${name || "inconnu"} !`);
```

**Exécution** :

```bash
node args.js Alice
# Affiche : "Bonjour, Alice !"
```

---

## **III. Concepts Fondamentaux à Maîtriser**

### **1. Boucle d’Événements (Event Loop)**

- **Non-bloquant** : Les opérations I/O (fichiers, réseau) sont déléguées au système.
- **Asynchrone** : Callbacks/promesses permettent de traiter les résultats plus tard.

**Exemple** :

```javascript
setTimeout(() => console.log("Tâche asynchrone"), 0);
console.log("Tâche synchrone");
// Sortie : "Tâche synchrone" → "Tâche asynchrone"
```

### **2. Single Thread mais Hautement Concurrent**

- **Un seul thread JS**, mais des workers pour les tâches lourdes (via `worker_threads`).
- **Idéal pour** : APIs, proxies, outils CLI.

### **3. `Buffer` et Streams**

Pour manipuler des données binaires (ex : images) :

```javascript
const buffer = Buffer.from("Hello", "utf8");
console.log(buffer); // <Buffer 48 65 6c 6c 6f>
```

---

## **IV. Exercices Pratiques (Vanilla JS)**

### **Exercice 1 : Serveur d’Heure**

- Créez un serveur qui renvoie l’heure actuelle à chaque requête GET.
- Utilisez `new Date()` et `res.end()`.

### **Exercice 2 : Compteur de Mots**

- Lisez un fichier texte (`data.txt`) et comptez ses mots.
- Utilisez `fs.readFile` et `string.split()`.

### **Exercice 3 : Mini Routeur**

- Gérez trois routes : `/`, `/hello`, `/goodbye` avec des réponses différentes.
- Analysez `req.url` avec un `switch`.

---

## **V. Pourquoi Node.js est-il Toujours Pertinent en 2025 ?**

- **Écosystème riche** (npm, frameworks comme Express, Nest).
- **Performant** pour les microservices et les APIs.
- **Full-stack JS** : Partage de code entre frontend et backend.
