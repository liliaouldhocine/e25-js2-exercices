// Objectif : Utiliser les fonctions fléchées avec map, filter, etc.

// Exercice :
// Réécrivez ces exemples avec des fonctions fléchées.

const numbers = [1, 2, 3, 4];

// 1. map avec fonction traditionnelle
const doubled = numbers.map(function (num) {
  return num * 2;
});

// 2. filter avec fonction traditionnelle
const evens = numbers.filter(function (num) {
  return num % 2 === 0;
});
