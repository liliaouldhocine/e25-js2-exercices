// main.js
import { createElement } from "./dom.js";
import { fetchData } from "./api.js";

fetchData().then((data) => {
  document.body.appendChild(createElement("p", `Données : ${data}`));
});
