class User {
  constructor(name) {
    this.name = name;
  }

  fetchData() {
    fetch("https://api.example.com/data").then((response) => {
      console.log(`Données reçues pour ${this.name}`); // `this` est correct
    });
  }
}
