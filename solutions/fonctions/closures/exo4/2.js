// Avec une IIFE (pour créer un nouveau scope à chaque itération) :

// javascript
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 1000);
  })(i);
}
