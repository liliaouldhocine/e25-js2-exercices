# **Exercices pour Comprendre JSON en JavaScript**

## **1. Qu'est-ce que JSON ?**

**JSON** est un format texte pour représenter des données structurées (comme un objet JS).  
Exemple :

```json
{
  "nom": "Alice",
  "age": 25,
  "estEtudiant": true
}
```

---

## **Exercice 1 : Créer un Objet JSON**

**Énoncé** :  
Créez un objet JSON représentant un livre avec :

- Un titre (`string`).
- Un auteur (`string`).
- Un nombre de pages (`number`).
- Est disponible (`boolean`).

---

## **Exercice 2 : Convertir en Chaîne JSON**

**Énoncé** :  
Utilisez `JSON.stringify()` pour convertir l'objet `livre` en chaîne JSON.

---

## **Exercice 3 : Convertir en Objet JS**

**Énoncé** :  
Prenez la chaîne JSON suivante et convertissez-la en objet JS avec `JSON.parse()` :

```javascript
const jsonStr = '{"nom":"Bob","age":30,"ville":"Paris"}';
```

---

## **Exercice 4 : Accéder aux Données**

**Énoncé** :  
Avec l'objet suivant :

```javascript
const etudiant = {
  nom: "Clara",
  notes: [12, 15, 18],
  adresse: {
    rue: "123 Rue du Code",
    ville: "Lyon",
  },
};
```

Affichez :

1. La deuxième note.
2. La ville de l'étudiant.

---

## **Exercice 5 : Modifier un JSON**

**Énoncé** :

1. Ajoutez une note `20` au tableau `notes` de `etudiant`.
2. Changez la ville en `"Toulouse"`.
3. Affichez le nouvel objet.

---

## **Exercice 6 : JSON et Tableaux**

**Énoncé** :  
Créez un tableau JSON de 3 produits (nom, prix).  
Affichez le prix du 2ème produit.

---

## **Exercice 7 : Gérer les Erreurs de Parsing**

**Énoncé** :  
Essayez de parser ce JSON **invalide** et gérez l'erreur :

```javascript
const jsonInvalide = '{"nom": "Alice", age: 30}'; // Manque les guillemets sur "age"
```

---

## **Exercice 8 : JSON et LocalStorage**

**Énoncé** :

1. Stockez l'objet `livre` dans `localStorage`.
2. Récupérez-le et affichez-le.

---

## **Exercice 9 : JSON et Fetch (API)**

**Énoncé** :  
Utilisez `fetch` pour récupérer des données depuis une API (ex: [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)) et affichez le nom du premier utilisateur.

---

## **Exercice Final : Mini-Projet**

**Énoncé** :  
Créez un tableau JSON de 3 films (titre, année, réalisateur).

1. Affichez-les sous forme de liste (`console.log`).
2. Ajoutez un nouveau film.
3. Supprimez le premier film.
4. Convertissez le tout en chaîne JSON.

---

## **Pourquoi JSON est Important ?**

- **Échange de données** (APIs, bases de données).
- **Stockage** (`localStorage`, fichiers).
- **Lisible** par les humains **et** les machines.

---

### **Résumé des Commandes Clés**

| Commande                 | Utilité                                    |
| ------------------------ | ------------------------------------------ |
| `JSON.stringify(obj)`    | Convertit un objet JS en chaîne JSON.      |
| `JSON.parse(jsonStr)`    | Convertit une chaîne JSON en objet JS.     |
| `localStorage.setItem()` | Stocke des données (sous forme de chaîne). |
| `fetch()`                | Récupère des données JSON depuis une API.  |
