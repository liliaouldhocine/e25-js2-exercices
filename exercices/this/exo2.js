// 2. this dans une fonction simple
// Objectif : Voir la différence entre mode strict et non-strict.
// Exercice :
// Exécutez ce code et expliquez le résultat :

function maFonction() {
  console.log(this);
}

maFonction(); // Que vaut `this` ?
