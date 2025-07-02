# **Error Handling**

**Objectif** : Gérer les erreurs 404 et les échecs réseau.

## **Frontend**

```javascript
async function fetchNonExistent() {
  try {
    const response = await fetch("http://localhost:3000/api/unknown");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
  } catch (error) {
    console.error("Fetch failed:", error.message); // Affiche "HTTP error! Status: 404"
  }
}
```
