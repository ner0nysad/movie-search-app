import { Card } from "@mantine/core";

import Votes from "../../votes/Votes";
import NoPoster from "../../no-poster/NoPoster";

import MovieRating from "../../movie-rating/MovieRating";
import {
  getGenres,
  getGenresById,
  getImage,
  getReleaseYear,
} from "../../../../utils/formatInfo";

import styles from "./MovieCard.module.css";

const MovieCard = ({ movie, genresKey, genres }) => {
  return (
    <Card
      component="a"
      href={`/movie?movie_id=${movie.id}`}
      className={styles.card}
    >
      <div className={styles.card__poster}>
        {movie.poster_path ? (
          <img
            className={styles.card__poster__image}
            src={getImage(movie.poster_path)}
            alt="Movie Poster"
          />
        ) : (
          <div className={styles.card__poster__not_found}>
            <NoPoster />
          </div>
        )}
      </div>

      <div className={styles.card__content}>
        <div className={styles.card__main}>
          <div className={styles.card__top}>
            <h2 className={styles.card__title}>{movie.original_title}</h2>
            <MovieRating
              className={styles.card__rating}
              id={movie.id}
              title={movie.original_title}
            />
          </div>
          <p className={styles.card__year}>
            {movie.release_date
              ? getReleaseYear(movie.release_date)
              : "unknown"}
          </p>
          <Votes
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
          />
        </div>
        <div className={styles.card__additional}>
          <p className={styles.card__genres}>
            Genres
            <span>
              {genres &&
                movie[genresKey] &&
                (genresKey === "genre_ids"
                  ? getGenresById(movie.genre_ids, genres)
                  : getGenres(movie.genres))}
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
