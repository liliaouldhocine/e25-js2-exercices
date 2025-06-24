import movieRouter from "./routes/movieRoutes.js";

// ... après les autres middlewares
app.use("/api/movies", movieRouter);
