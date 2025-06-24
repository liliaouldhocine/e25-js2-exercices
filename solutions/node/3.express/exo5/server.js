import { logger, auth } from "./middleware/logger.js";

app.use(logger); // Appliqué à toutes les routes
app.use("/api/private", auth); // Seulement sur les routes /api/private
