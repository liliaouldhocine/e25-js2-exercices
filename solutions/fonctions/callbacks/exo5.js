afficherMessage("1", 1000, () => {
  afficherMessage("2", 2000, () => {
    afficherMessage("3", 3000, () => {});
  });
});

// alternative

const rien = () => {
  console.log("C'est fini !");
};
const afficher3apres3sec = () => afficherMessage(3, 3000, rien);
const afficher2apres2sec = () => afficherMessage(2, 2000, afficher3apres3sec);

afficherMessage(1, 1000, afficher2apres2sec);
