class Ordre {
  constructor() {
    this.valeur = 0;
    setInterval(() => this.incrementer(), 1000); // ✅
  }

  incrementer() {
    // ✅
    this.valeur++;
    console.log(this.valeur);
  }

  static reset() {
    // Solution pour statique
    console.warn("Reset non implémenté (hors contexte instance)");
  }
}
