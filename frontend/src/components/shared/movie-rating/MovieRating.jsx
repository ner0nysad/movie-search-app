import { Rating } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

import { findInStorage, findRatingById } from "../../../utils/localStorage";
import ModalRating from "./modal-rating/ModalRating";

import styles from "./MovieRating.module.css";

const MovieRating = ({ id, title }) => {
  const [value, setValue] = useState(findInStorage(id));

  const [currentRating, setCurrentRating] = useState(findRatingById(id));

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div className={styles.movie__rating}>
        <Rating
          className={styles.movie__rating__star}
          count={1}
          value={value}
          size="lg"
          onChange={open}
        />
        {currentRating && (
          <p className={styles.movie__rating__average}>{currentRating}</p>
        )}
      </div>
      <ModalRating
        setCurrentRating={setCurrentRating}
        opened={opened}
        close={close}
        id={id}
        title={title}
        setValue={setValue}
      />
    </>
  );
};

export default MovieRating;
