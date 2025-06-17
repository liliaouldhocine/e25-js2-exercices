// Solution
const EventEmitter = require("events");

function timeout(ms) {
  const emitter = new EventEmitter();

  if (typeof ms !== "number") {
    process.nextTick(() =>
      emitter.emit("error", new Error("ms doit être un nombre"))
    );
    return emitter;
  }

  setTimeout(() => {
    emitter.emit("done");
  }, ms);

  return emitter;
}

// Utilisation
const timer = timeout(2000);
timer.on("done", () => console.log("Terminé !"));
timer.on("error", (err) => console.error(err.message));

// Testez avec : timeout('abc') → Affiche : "ms doit être un nombre"
