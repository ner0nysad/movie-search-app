import styles from "./Movie.module.css";

const MovieDescription = ({ overview }) => {
  return (
    <div className={styles.movie__description}>
      <h2 className={styles.movie__description__title}>Description</h2>
      <p className={styles.movie__description__overview}>{overview}</p>
    </div>
  );
};

export default MovieDescription;
