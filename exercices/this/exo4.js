// 4. Problème classique : perte de this
// Objectif : Identifier un piège courant avec this.
// Exercice :
// Pourquoi ce code ne fonctionne pas comme prévu ?

const utilisateur = {
  nom: "Bob",
  direBonjour() {
    console.log(`Bonjour, je suis ${this.nom}`);
  },
};

const greet = utilisateur.direBonjour;
greet(); // Que va-t-il se passer ?
