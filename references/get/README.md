### **GET Basics**

**Objectif** : Récupérer des données d'une API Node.js simple.

#### **Backend (Node.js)**

```javascript
// server.js
const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node!" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
```

#### **Frontend (Vite + VanillaJS)**

```javascript
// main.js
async function fetchHello() {
  try {
    const response = await fetch("http://localhost:3000/api/hello");
    if (!response.ok) throw new Error("Network error");
    const data = await response.json();
    console.log(data.message); // Affiche "Hello from Node!"
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchHello();
```
