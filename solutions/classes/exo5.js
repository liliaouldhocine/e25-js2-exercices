// Solution:
class Moteur {
  constructor(type) {
    this.type = type;
    this.estAllume = false;
  }

  demarrer = () => {
    this.estAllume = true;
  };

  arreter = () => {
    this.estAllume = false;
  };
}

class Voiture {
  constructor(marque, modele, typeMoteur) {
    this.marque = marque;
    this.modele = modele;
    this.moteur = new Moteur(typeMoteur);
  }

  demarrerVoiture = () => {
    this.moteur.demarrer();
    console.log(`La ${this.marque} ${this.modele} démarre`);
  };
}
