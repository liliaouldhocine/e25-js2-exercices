// ✅ Bon usage

class BonFormateur {
  static formatDate(date) {
    // ✅ Méthode classique
    return date.toISOString();
  }

  static prix() {
    return `${this.formatDate(new Date())} : 10$`; // ✅ this = classe
  }
}

// Key Point :
// → Les méthodes statiques doivent être classiques pour accéder à this (la classe).
