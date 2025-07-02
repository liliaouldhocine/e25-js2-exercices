### **Update (PUT) & Delete (DELETE)**

**Objectif** : Pratiquer les méthodes PUT et DELETE.

#### **Backend**

```javascript
let items = [{ id: 1, name: "Item 1" }];

app.put("/api/items/:id", (req, res) => {
  const updatedItem = req.body;
  items = items.map((item) =>
    item.id === parseInt(req.params.id) ? updatedItem : item
  );
  res.json(updatedItem);
});

app.delete("/api/items/:id", (req, res) => {
  items = items.filter((item) => item.id !== parseInt(req.params.id));
  res.status(204).send();
});
```

#### **Frontend**

```javascript
// Update
async function updateItem(id, newData) {
  const response = await fetch(`http://localhost:3000/api/items/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  });
  return await response.json();
}

// Delete
async function deleteItem(id) {
  const response = await fetch(`http://localhost:3000/api/items/${id}`, {
    method: "DELETE",
  });
  if (response.status === 204) console.log("Item deleted");
}
```
