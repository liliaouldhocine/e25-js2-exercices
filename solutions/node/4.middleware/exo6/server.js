app.get("/api/error", (req, res, next) => {
  const error = new Error("Erreur de test");
  error.code = "TEST_ERROR";
  next(error); // Passe au errorHandler
});

// Doit être le dernier middleware !
app.use(errorHandler);
