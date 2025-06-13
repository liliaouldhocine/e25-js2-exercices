// ✅ Bonne Pratique (Fonction fléchée)

class BonBouton {
  constructor() {
    this.clicks = 0;
    document.addEventListener("click", () => {
      this.clicks++; // ✅ this conservé (contexte lexical)
      console.log(`Clicks: ${this.clicks}`);
    });
  }
}

// Key Point :
// → Les fonctions fléchées préservent le this de la classe, idéal pour les callbacks.
