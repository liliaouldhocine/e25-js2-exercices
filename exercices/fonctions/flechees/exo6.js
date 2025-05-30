// Objectif : Utiliser les fonctions fléchées pour éviter les problèmes de this dans les promesses.

// Exercice :
// Pourquoi ce code pose problème ? Corrigez-le avec une fonction fléchée.

class User {
  constructor(name) {
    this.name = name;
  }

  fetchData() {
    fetch("https://api.example.com/data").then(function (response) {
      console.log(`Données reçues pour ${this.name}`); // Problème ici
    });
  }
}
