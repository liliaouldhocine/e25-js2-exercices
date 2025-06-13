// Exercice 3 : Héritage et méthodes
// Scénario : Extension d'une classe parente

// ⚠️ Problème de surcharge

class Parent {
  log = () => {
    // ❌ Méthode fléchée
    console.log("Parent");
  };
}

class Enfant extends Parent {
  log() {
    // ❌ Ne surcharge pas la méthode parente
    console.log("Enfant");
  }
}

const e = new Enfant();
e.log(); // "Parent" (inattendu)
