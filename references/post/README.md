# **POST Data**

**Objectif** : Envoyer des données au backend.

## **Backend**

```javascript
// server.js
app.use(express.json());

app.post("/api/users", (req, res) => {
  const newUser = req.body;
  console.log("Received:", newUser);
  res.status(201).json({ id: 123, ...newUser });
});
```

### **Frontend**

```javascript
// main.js
async function createUser() {
  const user = { name: "Alice", age: 25 };

  const response = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const savedUser = await response.json();
  console.log("User created:", savedUser);
}
```
