import { AspectRatio } from "@mantine/core";
import styles from "./Movie.module.css";
import { getVideoPath } from "../../utils/formatInfo";

const MovieTrailer = ({ videos }) => {
  return (
    <>
      {videos.includes((el) => el.type === "Trailer") && (
        <div className={styles.movie__trailer}>
          <h2 className={styles.movie__trailer__title}>Trailer</h2>
          <AspectRatio ratio={16 / 9}>
            <iframe
              className={styles.movie__trailer__video}
              src={`https://www.youtube.com/embed/${getVideoPath(videos)}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        </div>
      )}
    </>
  );
};

export default MovieTrailer;
