// Exercice 2 : Méthodes de classe
// Scénario : Classe de compteur

// ❌ Mix hasardeux

class MauvaisCompteur {
  valeur = 0;

  incrementer = () => {
    // ❌ Méthode fléchée comme propriété
    this.valeur++;
  };

  afficher() {
    // ❌ Mix des styles
    setTimeout(function () {
      console.log(this.valeur); // ❌ this perdu
    }, 1000);
  }
}
