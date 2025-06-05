// 8. Exercice avancé : Émuler des variables privées
// Exercice :
// Créez une classe Person (sans syntaxe class) utilisant une closure pour rendre age privé.

// javascript
function Person(name, age) {
  // Votre code ici
}

const alice = Person("Alice", 30);
console.log(alice.getName()); // "Alice"
console.log(alice.getAge()); // 30
alice.setAge(31);
console.log(alice.getAge()); // 31
