import errorHandler from "./middlewares/errorHandler.js";

// ... après toutes les routes
app.use(errorHandler); // Doit être le dernier middleware !
