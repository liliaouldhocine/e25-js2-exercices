// 8. Bonus : Fonction Universelle avec Callback
// Objectif : Créer une fonction flexible acceptant une callback.

// Exercice :
// Créez une fonction traiterTableau qui prend un tableau et une callback, puis retourne un nouveau tableau traité.

// javascript
function traiterTableau(arr, callback) {
  // Votre code ici
}

const nombres = [1, 2, 3];
const carres = traiterTableau(nombres, (x) => x * x);
console.log(carres); // [1, 4, 9]
