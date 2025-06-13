// Exercice 5 : Performance mémoire
// Scénario : Instanciation multiple

// ❌ Gaspillage mémoire

class MauvaisComponent {
  handleClick = () => {
    // ❌ Crée une nouvelle fonction par instance
    console.log("Clicked");
  };
}

// Chaque instance a sa propre copie de handleClick
const comp1 = new MauvaisComponent();
const comp2 = new MauvaisComponent();
console.log(comp1.handleClick === comp2.handleClick); // false
