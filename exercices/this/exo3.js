// 3. this dans une méthode d'objet
// Objectif : Comprendre this dans un contexte objet.
// Exercice :
// Analysez ce code :

const utilisateur = {
  nom: "Alice",
  direBonjour() {
    console.log(`Bonjour, je suis ${this.nom}`);
  },
};

utilisateur.direBonjour(); // Que va afficher cette ligne ?
