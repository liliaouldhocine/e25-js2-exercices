export const getMovie = (req, res, next) => {
  try {
    const movie = movieModel.getMovieById(req.params.id);
    if (!movie) {
      const error = new Error("NOT_FOUND");
      throw error;
    }
    res.json(movie);
  } catch (err) {
    next(err); // Passe au middleware d'erreur
  }
};
