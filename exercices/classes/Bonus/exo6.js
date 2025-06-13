// Exercice Final :
// Refactorisez ce code mélangeant tous les anti-patterns :

class Chaos {
  valeur = 0;

  constructor() {
    setInterval(function () {
      this.incrementer(); // ❌
    }, 1000);
  }

  incrementer = () => {
    this.valeur++;
    console.log(this.valeur);
  };

  static reset() {
    this.valeur = 0; // ❌
  }
}
