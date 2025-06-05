// 4. Boucle et closure : le piège classique
// Exercice :
// Pourquoi ce code affiche-t-il toujours 3 ? Corrigez-le pour qu'il affiche 0, 1, 2.

// javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// Explication :
// var n'a pas de scope de bloc. Toutes les closures partagent la même référence à i (qui vaut 3 à la fin de la boucle).
