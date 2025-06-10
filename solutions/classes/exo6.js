// Solution partielle:
class Livre {
  constructor(titre, auteur, ISBN) {
    this.titre = titre;
    this.auteur = auteur;
    this.ISBN = ISBN;
    this.estEmprunté = false;
  }
}

class Membre {
  constructor(nom, email) {
    this.nom = nom;
    this.email = email;
    this.livresEmpruntés = [];
  }

  emprunterLivre = (livre) => {
    if (!livre.estEmprunté) {
      this.livresEmpruntés.push(livre);
      livre.estEmprunté = true;
      return true;
    }
    return false;
  };
}

class Bibliotheque {
  constructor() {
    this.livres = [];
    this.membres = [];
  }

  ajouterLivre = (livre) => {
    this.livres.push(livre);
  };

  // ... autres méthodes
}
