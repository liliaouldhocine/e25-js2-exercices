// 5. Mémoïsation avec closure
// Exercice :
// Créez une fonction memoize qui prend une fonction coûteuse en calcul et retourne une version mémoïsée (cache des résultats pour les mêmes arguments).

// javascript
function expensiveCalculation(n) {
  console.log("Calcul coûteux !");
  return n * 2;
}

const memoized = memoize(expensiveCalculation);
console.log(memoized(5)); // Calcul coûteux ! → 10
console.log(memoized(5)); // 10 (cache)
