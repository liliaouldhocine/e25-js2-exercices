// Solution:
class Calculatrice {
  static addition = (a, b) => a + b;
  static soustraction = (a, b) => a - b;
  static multiplication = (a, b) => a * b;
  static division = (a, b) => a / b;

  static sommeTableau = (nombres) => nombres.reduce((acc, val) => acc + val, 0);
}

// console.log(Calculatrice.sommeTableau([1, 2, 3, 4]));
