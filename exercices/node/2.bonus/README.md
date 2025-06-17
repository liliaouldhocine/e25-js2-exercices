# **Gestion d'Erreurs et EventEmitter en Node.js (Vanilla JS)**

---

## **Partie Théorique**

### **1. Gestion d'Erreurs en Node.js**

**Pourquoi est-ce crucial ?**  
En Node.js, les erreurs non gérées peuvent crasher votre application. Voici comment les traiter proprement.

#### **Techniques Clés**

| Méthode          | Cas d'Usage                      | Exemple                   |
| ---------------- | -------------------------------- | ------------------------- |
| **`try/catch`**  | Erreurs synchrones               | Fichiers, JSON.parse      |
| **Callbacks**    | Pattern Node.js historique       | `fs.readFile(err, data)`  |
| **Promesses**    | Alternative moderne              | `fs.promises.readFile()`  |
| **EventEmitter** | Erreurs dans des flux/événements | `stream.on('error', ...)` |

#### **Bonnes Pratiques**

- **Toujours vérifier `err`** dans les callbacks.
- **Utiliser `throw`** uniquement pour les erreurs critiques.
- **Logger les erreurs** (console, fichier, Sentry).

---

### **2. EventEmitter : Le Cœur Événementiel de Node.js**

**Concept** :

- Hérité du pattern **Observer**.
- Permet de créer/gérer des événements personnalisés.

**Utilisations natives** :

- `http.Server` (événements `request`, `error`).
- `fs.ReadStream` (événements `data`, `end`).
- `process` (événements `exit`, `uncaughtException`).

---

## **Synthèse des Bonnes Pratiques**

1. **EventEmitter** :

   - Utilisez `.on()` avant `.emit()`.
   - Gérez toujours l'événement `error`.

2. **Erreurs** :

   - Différenciez les erreurs "métier" (404) des crashes (500).
   - En production, utilisez `process.on('uncaughtException')` pour logger les erreurs fatales.

3. **Patterns Utiles** :
   ```javascript
   // Middleware de gestion d'erreurs (inspiré d'Express)
   function errorHandler(err, req, res, next) {
     console.error(err.stack);
     res.status(500).send("Erreur serveur !");
   }
   ```
