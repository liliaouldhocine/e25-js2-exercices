// 1. Arrow function :

bouton.addEventListener("click", () => {
  console.log(this.texte); // `this` vient de `objet`
});

// 2. .bind() :

bouton.addEventListener(
  "click",
  function () {
    console.log(this.texte);
  }.bind(objet)
);

// 3. Variable intermédiaire :

const self = this;
bouton.addEventListener("click", function () {
  console.log(self.texte);
});
