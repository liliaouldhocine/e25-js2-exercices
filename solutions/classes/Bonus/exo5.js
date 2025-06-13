// ✅ Optimisation

class BonComponent {
  handleClick() {
    // ✅ Partagée via prototype
    console.log("Clicked");
  }
}

const bon1 = new BonComponent();
const bon2 = new BonComponent();
console.log(bon1.handleClick === bon2.handleClick); // true
// Key Point :
// → Les méthodes fléchées comme propriétés consomment plus de mémoire.
