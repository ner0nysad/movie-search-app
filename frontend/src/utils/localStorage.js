export const changeStorage = (id, rating) => {
  const movies = getFromStorage();

  if (movies === null) {
    saveToStorage([{ id: id, rating: rating }]);
  } else if (findInStorage(id)) {
    const newMovies = movies.filter((movie) => movie.id !== id);
    newMovies.push({ id: id, rating: rating });
    saveToStorage(newMovies);
  } else {
    movies.push({ id: id, rating: rating });
    saveToStorage(movies);
  }
};

export const findInStorage = (id) => {
  const movies = getFromStorage();

  let exist = false;
  movies !== null &&
    movies.forEach((movie) => {
      if (movie.id === id) {
        exist = true;
      }
    });
  return exist;
};

export const findRatingById = (id) => {
  const movies = getFromStorage();

  let rating = null;

  movies !== null &&
    movies.forEach((movie) => {
      if (movie.id === id) {
        rating = movie.rating;
      }
    });

  return rating;
};

export const removeFromStorage = (id) => {
  const movies = getFromStorage();

  const newMovies = movies.filter((movie) => movie.id !== id);

  saveToStorage(newMovies);
};

export const getFromStorage = () =>
  JSON.parse(localStorage.getItem("movies"))
    ? JSON.parse(localStorage.getItem("movies"))
    : [];

const saveToStorage = (data) => {
  localStorage.setItem("movies", JSON.stringify(data));
};
