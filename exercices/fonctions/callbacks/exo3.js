// 3. Callback Asynchrone (setTimeout)
// Objectif : Comprendre l'exécution différée avec les callbacks.

// Exercice :
// Créez une fonction direBonjour qui prend un nom et une callback, puis appelle la callback après 1 seconde avec un message.

// javascript
function direBonjour(nom, callback) {
  // Votre code ici
}

direBonjour("Alice", function (message) {
  console.log(message); // Doit afficher "Bonjour, Alice !" après 1s
});
