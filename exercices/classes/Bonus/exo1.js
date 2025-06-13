// Exercice 1 : Gestion du this dans les callbacks
// Scénario : Gestion d'événements dans une classe UI

// 🚩 Mauvaise Pratique (Problème de this)

class MauvaisBouton {
  constructor() {
    this.clicks = 0;
    document.addEventListener("click", function () {
      this.clicks++; // ❌ this === Window (perdu le contexte)
      console.log(`Clicks: ${this.clicks}`);
    });
  }
}
