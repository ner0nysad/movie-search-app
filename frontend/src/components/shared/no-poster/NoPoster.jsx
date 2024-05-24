import NoPosterImage from "../../../assets/images/no-poster.svg";

import styles from "./NoPoster.module.css";

const NoPoster = () => {
  return (
    <>
      <img
        className={styles.no_poster__image}
        src={NoPosterImage}
        alt="Poster not found"
      />
      <p className={styles.no_poster__text}>No Poster</p>
    </>
  );
};

export default NoPoster;
