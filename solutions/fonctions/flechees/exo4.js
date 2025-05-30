function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++; // Maintenant, `this` est lié à l'objet Timer
    console.log(this.seconds);
  }, 1000);
}

const timer = new Timer(); // Fonctionne !
