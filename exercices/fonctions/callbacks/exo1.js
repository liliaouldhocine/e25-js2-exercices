// 1. Callback Synchrone Basique
// Objectif : Comprendre comment passer une fonction comme argument.

// Exercice :
// Créez une fonction calculer qui prend deux nombres et une callback, puis applique l'opération de la callback aux nombres.

// javascript
function calculer(a, b, callback) {
  // Votre code ici
}

function addition(a, b) {
  return a + b;
}

console.log(calculer(5, 3, addition)); // Doit afficher 8
