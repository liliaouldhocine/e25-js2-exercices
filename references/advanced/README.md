### **Advanced (Headers + Auth)**

**Objectif** : Envoyer un token d'authentification.

#### **Backend**

```javascript
app.get("/api/protected", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
  res.json({ secretData: "🔒" });
});
```

#### **Frontend**

```javascript
async function fetchProtected() {
  const token = "fake-jwt-token";
  const response = await fetch("http://localhost:3000/api/protected", {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(await response.json());
}
```
