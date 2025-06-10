// Solution:
class Calculatrice {
  constructor() {
    this.valeur = 0;
  }

  add = (n) => {
    this.valeur += n;
    return this;
  };

  multiply = (n) => {
    this.valeur *= n;
    return this;
  };

  subtract = (n) => {
    this.valeur -= n;
    return this;
  };

  value = () => this.valeur;
}
