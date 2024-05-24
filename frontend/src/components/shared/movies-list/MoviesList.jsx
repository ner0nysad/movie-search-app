import styles from "./MoviesList.module.css";
import MovieCard from "./movie-card/MovieCard";

const MoviesList = ({ movieList, genresKey, genres }) => {
  return (
    <div className={styles.movies__list}>
      {movieList.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          genresKey={genresKey}
          genres={genres}
        />
      ))}
    </div>
  );
};

export default MoviesList;
