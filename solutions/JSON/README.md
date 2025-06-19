# **Exercices pour Comprendre JSON en JavaScript (Niveau Débutant)**

---

## **Exercice 1 : Créer un Objet JSON**

**Solution** :

```javascript
const livre = {
  titre: "Apprendre JavaScript",
  auteur: "Alice Martin",
  pages: 200,
  estDisponible: true,
};
console.log(livre);
```

---

## **Exercice 2 : Convertir en Chaîne JSON**

**Solution** :

```javascript
const livreJSON = JSON.stringify(livre);
console.log(livreJSON); // Affiche : {"titre":"Apprendre JavaScript",...}
```

---

## **Exercice 3 : Convertir en Objet JS**

**Solution** :

```javascript
const utilisateur = JSON.parse(jsonStr);
console.log(utilisateur.ville); // Affiche : "Paris"
```

---

## **Exercice 4 : Accéder aux Données**

**Solution** :

```javascript
console.log(etudiant.notes[1]); // 15
console.log(etudiant.adresse.ville); // "Lyon"
```

---

## **Exercice 5 : Modifier un JSON**

**Solution** :

```javascript
etudiant.notes.push(20);
etudiant.adresse.ville = "Toulouse";
console.log(etudiant);
```

---

## **Exercice 6 : JSON et Tableaux**

**Solution** :

```javascript
const produits = [
  { nom: "Livre", prix: 10 },
  { nom: "Stylo", prix: 2 },
  { nom: "Cahier", prix: 5 },
];
console.log(produits[1].prix); // 2
```

---

## **Exercice 7 : Gérer les Erreurs de Parsing**

**Solution** :

```javascript
try {
  const data = JSON.parse(jsonInvalide);
  console.log(data);
} catch (err) {
  console.error("Erreur de parsing :", err.message); // Affiche l'erreur
}
```

---

## **Exercice 8 : JSON et LocalStorage**

**Solution** :

```javascript
// Stockage
localStorage.setItem("monLivre", JSON.stringify(livre));

// Récupération
const livreStocke = JSON.parse(localStorage.getItem("monLivre"));
console.log(livreStocke.titre); // "Apprendre JavaScript"
```

---

## **Exercice 9 : JSON et Fetch (API)**

**Solution** :

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data[0].name))
  .catch((err) => console.error("Erreur :", err));
```

---

## **Exercice Final : Mini-Projet**

**Solution** :

```javascript
let films = [
  { titre: "Inception", année: 2010, réalisateur: "Nolan" },
  { titre: "Matrix", année: 1999, réalisateur: "Wachowskis" },
  { titre: "Jurassic Park", année: 1993, réalisateur: "Spielberg" },
];

// 1. Afficher
films.forEach((film) => console.log(film.titre));

// 2. Ajouter
films.push({ titre: "Interstellar", année: 2014, réalisateur: "Nolan" });

// 3. Supprimer
films.shift();

// 4. Convertir
const filmsJSON = JSON.stringify(films);
console.log(filmsJSON);
```
