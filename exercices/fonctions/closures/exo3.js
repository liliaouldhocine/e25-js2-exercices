// 3. Compteur privé avec closure
// Exercice :
// Utilisez une closure pour créer un compteur avec des méthodes increment(), decrement() et getValue(). Le compteur ne doit pas exposer sa variable count.

// javascript
function createCounter() {
  // Votre code ici
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // 2
counter.decrement();
console.log(counter.getValue()); // 1
