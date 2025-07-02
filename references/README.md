#### **Exemple**

1. Affichage d'une liste (GET)
2. Ajout d'un élément (POST)
3. Suppression d'un élément (DELETE)

```javascript
// Frontend
async function fetchItems() {
  const response = await fetch("/api/items");
  return await response.json();
}

async function addItem(item) {
  await fetch("/api/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
}

async function removeItem(id) {
  await fetch(`/api/items/${id}`, { method: "DELETE" });
}
```
