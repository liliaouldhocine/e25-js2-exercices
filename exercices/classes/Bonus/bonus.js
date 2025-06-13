// Exercice Bonus : Cas où les fléchées sont utiles
// Scénario : Liaison de contexte dans une API

class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  // ✅ Bon usage de fléchée pour liaison permanente
  fetchData = async (endpoint) => {
    const response = await fetch(`${this.baseUrl}/${endpoint}`);
    return response.json();
  };
}

const client = new ApiClient("https://api.example.com");
const btn = document.getElementById("fetch-btn");
