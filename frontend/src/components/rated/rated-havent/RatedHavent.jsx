import { useNavigate } from "react-router-dom";

import HaventRated from "../../../assets/images/havent-rated.png";

import ButtonUI from "../../ui/button/ButtonUI";

import styles from "./RatedHavent.module.css";

const RatedHavent = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.rated__havent}>
      <img
        className={styles.rated__havent__image}
        src={HaventRated}
        alt="Haven't rated any films"
      />
      <h2 className={styles.rated__havent__title}>
        You haven't rated any films yet
      </h2>
      <ButtonUI size="sm" onClick={() => navigate("/")}>
        Find movies
      </ButtonUI>
    </div>
  );
};

export default RatedHavent;
