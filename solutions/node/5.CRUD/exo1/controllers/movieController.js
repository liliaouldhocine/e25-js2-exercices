import * as movieModel from "../models/Movie.js";

export const createMovie = (req, res) => {
  const { title, director, year } = req.body;

  if (!title || !director || !year) {
    return res.status(400).json({ error: "Tous les champs sont requis" });
  }

  const newMovie = movieModel.addMovie({ title, director, year });
  res.status(201).json(newMovie);
};

export const getMovies = (req, res) => {
  res.json(movieModel.getAllMovies());
};

export const getMovie = (req, res) => {
  const movie = movieModel.getMovieById(req.params.id);
  if (!movie) return res.status(404).json({ error: "Film non trouvé" });
  res.json(movie);
};

export const updateMovie = (req, res) => {
  const updated = movieModel.updateMovie(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: "Film non trouvé" });
  res.json(updated);
};

export const deleteMovie = (req, res) => {
  const exists = movieModel.getMovieById(req.params.id);
  if (!exists) return res.status(404).json({ error: "Film non trouvé" });

  movieModel.deleteMovie(req.params.id);
  res.status(204).send();
};
