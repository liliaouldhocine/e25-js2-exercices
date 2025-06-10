// Solution:
class Animal {
  constructor(nom, espece, age) {
    this.nom = nom;
    this.espece = espece;
    this.age = age;
  }

  decrire() {
    return `${this.nom} est un ${this.espece} âgé de ${this.age} ans`;
  }

  vieillir = () => {
    this.age++;
    console.log(`${this.nom} a maintenant ${this.age} ans`);
  };
}
