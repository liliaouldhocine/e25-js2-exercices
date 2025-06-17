// Solution
const EventEmitter = require("events");

class Compteur extends EventEmitter {
  constructor() {
    super();
    this.valeur = 0;
  }

  inc() {
    this.valeur++;
    this.emit("increment", this.valeur);
  }

  reset() {
    this.valeur = 0;
    this.emit("reset");
  }
}

// Utilisation
const compteur = new Compteur();
compteur.on("increment", (v) => console.log(`Nouvelle valeur : ${v}`));
compteur.on("reset", () => console.log("Compteur réinitialisé !"));

compteur.inc(); // Affiche : "Nouvelle valeur : 1"
compteur.reset(); // Affiche : "Compteur réinitialisé !"
