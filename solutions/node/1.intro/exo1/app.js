// Solution
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const now = new Date();
    const time = now.toLocaleTimeString();
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Heure actuelle : ${time}`);
  } else {
    res.writeHead(405);
    res.end("Méthode non autorisée");
  }
});

server.listen(3000, () =>
  console.log("Serveur démarré sur http://localhost:3000")
);
