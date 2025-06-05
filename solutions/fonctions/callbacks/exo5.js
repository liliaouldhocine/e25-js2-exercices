afficherMessage("1", 1000, () => {
  afficherMessage("2", 2000, () => {
    afficherMessage("3", 3000, () => {});
  });
});
