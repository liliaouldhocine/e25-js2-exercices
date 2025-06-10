// Solution:
class CompteBancaire {
  #solde;

  constructor(soldeInitial) {
    this.#solde = soldeInitial;
  }

  get solde() {
    return this.#solde;
  }

  deposer = (montant) => {
    this.#solde += montant;
  };

  retirer = (montant) => {
    if (montant <= this.#solde) {
      this.#solde -= montant;
      return true;
    }
    console.log("Fonds insuffisants");
    return false;
  };
}
