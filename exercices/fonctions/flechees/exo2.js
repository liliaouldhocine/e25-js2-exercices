// Objectif : Voir la différence de comportement de this.

// Exercice :
// Analysez le code suivant et expliquez pourquoi this ne se comporte pas pareil.

const person = {
  name: "Alice",
  traditionalFunction: function () {
    console.log(this.name); // Que va afficher ceci ?
  },
  arrowFunction: () => {
    console.log(this.name); // Et ceci ?
  },
};

person.traditionalFunction(); // ?
person.arrowFunction(); // ?
