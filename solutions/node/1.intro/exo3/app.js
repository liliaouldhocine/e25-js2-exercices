// Solution
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  switch (req.url) {
    case "/":
      res.end("Accueil");
      break;
    case "/hello":
      res.end("Bonjour le monde");
      break;
    case "/goodbye":
      res.end("Au revoir");
      break;
    default:
      res.writeHead(404);
      res.end("Page non trouvée");
  }
});

server.listen(3000, () => console.log("Serveur démarré"));
