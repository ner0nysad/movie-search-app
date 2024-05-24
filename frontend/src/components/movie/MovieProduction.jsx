import { Image } from "@mantine/core";
import styles from "./Movie.module.css";
import { getImage } from "../../utils/formatInfo";

import clapperboard from "../../assets/images/clapperboard.svg";

const MovieProduction = ({ companies }) => {
  return (
    <div className={styles.movie__production}>
      <h2 className={styles.movie__production__title}>Production</h2>
      <ul className={styles.movie__production__list}>
        {companies.map((company) => (
          <li key={company.id}>
            <div className={styles.movie__production__logo}>
              <Image
                w="100%"
                src={
                  company.logo_path ? getImage(company.logo_path) : clapperboard
                }
              />
            </div>
            <p className={styles.movie__production__name}>{company.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieProduction;
