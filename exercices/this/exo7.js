// 7. this et les méthodes de classe (ES6)
// Objectif : Utiliser this dans une classe.
// Exercice :
// Analysez ce code :

class Voiture {
  constructor(marque) {
    this.marque = marque;
  }

  afficherMarque() {
    console.log(`Marque : ${this.marque}`);
  }
}

const bmw = new Voiture("BMW");
bmw.afficherMarque(); // Que va-t-il se passer ?
