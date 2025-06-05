function direBonjour(nom, callback) {
  setTimeout(() => {
    callback(`Bonjour, ${nom} !`);
  }, 1000);
}
