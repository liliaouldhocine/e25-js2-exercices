// ✅ Solution optimale

class BonParent {
  log() {
    // ✅ Méthode classique
    console.log("Parent");
  }
}

class BonEnfant extends BonParent {
  log() {
    // ✅ Surcharge correcte
    super.log(); // Appel possible au parent
    console.log("Enfant");
  }
}

// Key Point :
// → Les méthodes fléchées ne sont pas surchargeables (bindées à l'instance).
