// 5. this avec les fonctions fléchées
// Objectif : Comprendre pourquoi les arrow functions résolvent certains problèmes.
// Exercice :
// Comparez ces deux codes :

// Code 1 (fonction normale)
const timer1 = {
  secondes: 0,
  start() {
    setInterval(function () {
      this.secondes++; // Problème ici !
      console.log(this.secondes);
    }, 1000);
  },
};

// Code 2 (fonction fléchée)
const timer2 = {
  secondes: 0,
  start() {
    setInterval(() => {
      this.secondes++; // Fonctionne !
      console.log(this.secondes);
    }, 1000);
  },
};

timer1.start(); // Que se passe-t-il ?
timer2.start(); // Et ici ?
