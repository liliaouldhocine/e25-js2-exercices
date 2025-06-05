// 4. Gestion d'Erreur avec Callback
// Objectif : Implémenter le pattern "error-first callback".

// Exercice :
// Créez une fonction diviser qui prend deux nombres et une callback. Si le diviseur est 0, appelez la callback avec une erreur.

// javascript
function diviser(a, b, callback) {
  // Votre code ici
}

diviser(10, 2, (err, result) => {
  if (err) console.error(err);
  else console.log(result); // 5
});

diviser(10, 0, (err, result) => {
  if (err) console.error(err); // "Division par zéro !"
});
