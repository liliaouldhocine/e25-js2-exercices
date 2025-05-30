// 8. Exercice final : Pièges et solutions
// Objectif : Résoudre un problème complexe avec this.
// Exercice :
// Pourquoi ce code échoue-t-il ? Corrigez-le de 3 manières différentes.

const bouton = document.querySelector("button");

const objet = {
  texte: "Clic !",
  ecouterClic() {
    bouton.addEventListener("click", function () {
      console.log(this.texte); // Problème ici !
    });
  },
};

objet.ecouterClic();
