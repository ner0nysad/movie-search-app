export const getImage = (path) => {
  if (path === null) return null;
  return `https://image.tmdb.org/t/p/original/${path}`;
};

export const getReleaseYear = (release_date) => release_date.slice(0, 4);

export const getVoteAvg = (vote_average) => {
  return vote_average.toFixed(1);
};

export const getVoteCount = (vote_count) => {
  return vote_count >= 1000000
    ? (vote_count / 1000000).toFixed(1).replace(/\.0+$/, "") + "M"
    : vote_count >= 1000
    ? (vote_count / 1000).toFixed(1).replace(/\.0+$/, "") + "K"
    : vote_count;
};

export const getGenresById = (genre_ids, genreList) => {
  if (genre_ids.length === 0) return "unknown";

  function search(genre_id, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === genre_id) {
        return arr[i].name;
      }
    }
  }

  let genres = "";
  genre_ids.forEach((genre_id, index) => {
    genres += search(genre_id, genreList);
    genres += index + 1 !== genre_ids.length ? ", " : "";
  });
  return genres;
};

export const getGenres = (genreList) => {
  if (genreList.length === 0) return "unknown";

  let genres = "";
  genreList.forEach((genre, index) => {
    genres += genre.name;
    genres += index + 1 !== genreList.length ? ", " : "";
  });
  return genres;
};

export const genresForSelect = (genres) => {
  const data = [];
  genres.forEach((genre) => {
    data.push({ value: genre.id.toString(), label: genre.name });
  });
  return data;
};

export const getDuration = (runtime) => {
  const m = runtime % 60;
  const h = (runtime - m) / 60;

  return h.toString() + "h " + m.toString() + "m";
};

export const getDate = (release_date) => {
  if (!release_date) return "unknown";

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(release_date);

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

export const getSum = (amount) => {
  return amount
    .toLocaleString("en-US", { style: "currency", currency: "USD" })
    .slice(0, -3);
};

export const getVideoPath = (videos) => {
  return videos.filter((video) => video.type === "Trailer")[0].key;
};
