// Objectif : Utiliser les fonctions fléchées pour préserver le contexte.

// Exercice :
// Corrigez ce code pour que le this fonctionne comme attendu.

function Timer() {
  this.seconds = 0;
  setInterval(function () {
    this.seconds++; // Problème : `this` ne pointe pas sur l'objet Timer
    console.log(this.seconds);
  }, 1000);
}

const timer = new Timer(); // Que se passe-t-il ?
