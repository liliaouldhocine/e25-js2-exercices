function direBonjourPromise(nom) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Bonjour, ${nom} !`), 1000);
  });
}
