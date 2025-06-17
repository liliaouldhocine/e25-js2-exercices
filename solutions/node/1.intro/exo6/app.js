// Solution
const http = require("http");
const https = require("https");

const proxy = http.createServer((req, res) => {
  const options = {
    hostname: "jsonplaceholder.typicode.com",
    path: req.url,
    method: req.method,
  };

  const proxyReq = https.request(options, (proxyRes) => {
    proxyRes.pipe(res); // Transfère la réponse au client
  });

  req.pipe(proxyReq); // Transfère la requête à l'API
});

proxy.listen(3000, () =>
  console.log("Proxy démarré sur http://localhost:3000")
);
