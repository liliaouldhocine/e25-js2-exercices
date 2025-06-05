// 1. Comprendre la base d'une closure

// Exercice :
// Analysez ce code et expliquez pourquoi la fonction interne a accès à variableExterne même après l'exécution de fonctionExterne.

// javascript
function fonctionExterne() {
  const variableExterne = "Je suis à l'extérieur !";

  function fonctionInterne() {
    console.log(variableExterne); // Que va afficher cette ligne ?
  }

  return fonctionInterne;
}

const maClosure = fonctionExterne();
maClosure(); // ?
