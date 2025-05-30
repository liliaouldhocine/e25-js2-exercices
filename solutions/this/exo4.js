// Explication :

// greet est une référence à la fonction direBonjour, mais détachée de l'objet utilisateur.

// this pointe alors vers window (ou undefined en mode strict).

// Solution : Utiliser .bind() :

const greet = utilisateur.direBonjour.bind(utilisateur);
greet(); // Affiche "Bonjour, je suis Bob"
