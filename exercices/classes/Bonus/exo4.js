// Exercice 4 : Méthodes statiques
// Scénario : Utilitaire de formatage

// ❌ Mauvais usage

class MauvaisFormateur {
  static formatDate = (date) => {
    // ❌ Fléchée inutile
    return date.toISOString();
  };

  static prix = () => {
    // ❌ Pas d'accès aux autres méthodes statiques
    return `${this.formatDate(new Date())} : 10$`; // ❌ this undefined
  };
}
