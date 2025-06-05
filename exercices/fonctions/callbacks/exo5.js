// 5. Enchaînement de Callbacks (Callback Hell)
// Objectif : Simuler un enchaînement d'opérations asynchrones.

// Exercice :
// Affichez trois messages avec des délais successifs (1s, 2s, 3s) en utilisant des callbacks imbriquées.

// javascript
function afficherMessage(message, delai, callback) {
  setTimeout(() => {
    console.log(message);
    callback();
  }, delai);
}

// Affichez "1" (1s), puis "2" (2s), puis "3" (3s)
afficherMessage("1", 1000, () => {
  // Votre code ici
});
