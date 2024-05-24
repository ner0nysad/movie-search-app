import MovieRating from "../shared/movie-rating/MovieRating";
import {
  getDate,
  getDuration,
  getGenres,
  getImage,
  getReleaseYear,
  getSum,
} from "../../utils/formatInfo";

import NoPoster from "../shared/no-poster/NoPoster";
import Votes from "../shared/votes/Votes";

import styles from "./Movie.module.css";

const MovieCardBig = ({ movieInfo }) => {
  return (
    <div className={styles.movie__card}>
      <div className={styles.movie__poster}>
        {movieInfo.poster_path ? (
          <img
            className={styles.movie__poster__image}
            src={getImage(movieInfo.poster_path)}
            alt="Movie Poster"
          />
        ) : (
          <div className={styles.movie__poster__not_found}>
            <NoPoster />
          </div>
        )}
      </div>

      <div className={styles.movie__card__content}>
        <div className={styles.movie__main}>
          <div className={styles.movie__top}>
            <h2 className={styles.movie__title}>{movieInfo.original_title}</h2>
            <MovieRating id={movieInfo.id} title={movieInfo.original_title} />
          </div>
          <p className={styles.movie__year}>
            {getReleaseYear(movieInfo.release_date)}
          </p>
          <Votes
            vote_average={movieInfo.vote_average}
            vote_count={movieInfo.vote_count}
          />
        </div>
        <div className={styles.movie__stats}>
          <ul className={styles.movie__list}>
            <li>Duration</li>
            <li>Premiere</li>
            <li>Budget</li>
            <li>Gross worldwide</li>
            <li>Genres</li>
          </ul>
          <ul className={styles.movie__list}>
            <li>{getDuration(movieInfo.runtime)}</li>
            <li>{getDate(movieInfo.release_date)}</li>
            <li>{getSum(movieInfo.budget)}</li>
            <li>{getSum(movieInfo.revenue)}</li>
            <li>{getGenres(movieInfo.genres)}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieCardBig;
