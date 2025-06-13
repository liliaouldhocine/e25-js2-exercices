// ✅ Style cohérent

class BonCompteur {
  constructor() {
    this.valeur = 0;
  }

  incrementer() {
    // ✅ Méthode classique
    this.valeur++;
  }

  afficher() {
    setTimeout(() => {
      // ✅ Fonction fléchée pour callback
      console.log(this.valeur); // ✅ this correct
    }, 1000);
  }
}

// Key Point :
// → Méthodes classiques pour l'API publique, fléchées pour les callbacks internes.
