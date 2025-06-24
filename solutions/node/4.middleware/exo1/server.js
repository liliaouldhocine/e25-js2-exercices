import { timeLogger } from "./middleware/timeLogger.js";
app.use(timeLogger); // Appliqué à toutes les routes

app.get("/", (req, res) => {
  res.send(`Requête reçue à ${req.requestTime}`);
});

// Points clés :
// - `next()` est obligatoire pour passer au middleware suivant
// - On peut enrichir l'objet `req` (ici avec `requestTime`)
