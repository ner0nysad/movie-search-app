import NotFound from "../../../assets/images/movies.png";

import styles from "./NotFoundMovies.module.css";

const NotFoundMovies = () => {
  return (
    <div className={styles.not_found_movies}>
      <img
        className={styles.not_found_movies__image}
        src={NotFound}
        alt="We don't have such movies"
      />
      <h2 className={styles.not_found_movies__title}>
        We don't have such movies, look for another one
      </h2>
    </div>
  );
};

export default NotFoundMovies;
