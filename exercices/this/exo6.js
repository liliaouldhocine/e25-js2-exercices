// 6. this dans les constructeurs
// Objectif : Comprendre this avec new.
// Exercice :
// Que fait this ici ?

function Personne(nom) {
  this.nom = nom;
  this.saluer = function () {
    console.log(`Je m'appelle ${this.nom}`);
  };
}

const alice = new Personne("Alice");
alice.saluer(); // Que va afficher cette ligne ?
