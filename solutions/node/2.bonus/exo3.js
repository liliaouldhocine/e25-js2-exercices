// Solution
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    res.writeHead(405);
    return res.end("Méthode non autorisée");
  }

  const filePath = path.join(__dirname, "public", req.url);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404);
        res.end("Fichier non trouvé");
      } else if (err.code === "EACCES") {
        res.writeHead(403);
        res.end("Accès refusé");
      } else {
        res.writeHead(500);
        res.end("Erreur interne");
      }
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});

server.listen(3000, () => console.log("Serveur démarré"));
