// Solution:
class Chien extends Animal {
  constructor(nom, age, race) {
    super(nom, "chien", age);
    this.race = race;
  }

  aboyer = () => {
    console.log("Woof!");
  };

  decrire() {
    return `${super.decrire()} de race ${this.race}`;
  }
}
