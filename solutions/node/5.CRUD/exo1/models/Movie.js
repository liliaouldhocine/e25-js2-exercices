let movies = [
  { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
];

// CREATE
export const addMovie = (movie) => {
  const newMovie = {
    id: movies.length + 1,
    ...movie,
  };
  movies.push(newMovie);
  return newMovie;
};

// READ ALL
export const getAllMovies = () => movies;

// READ ONE
export const getMovieById = (id) =>
  movies.find((movie) => movie.id === parseInt(id));

// UPDATE
export const updateMovie = (id, updates) => {
  const index = movies.findIndex((m) => m.id === parseInt(id));
  if (index === -1) return null;

  movies[index] = { ...movies[index], ...updates };
  return movies[index];
};

// DELETE
export const deleteMovie = (id) => {
  movies = movies.filter((m) => m.id !== parseInt(id));
};
