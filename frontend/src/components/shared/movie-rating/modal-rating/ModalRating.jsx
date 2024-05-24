import { useState } from "react";
import { Modal, Rating } from "@mantine/core";

import {
  changeStorage,
  findRatingById,
  removeFromStorage,
} from "../../../../utils/localStorage";

import ButtonUI from "../../../ui/button/ButtonUI";
import ButtonText from "../../../ui/button-text/ButtonText";

import styles from "./ModalRating.module.css";

const ModalRating = ({
  title,
  id,
  opened,
  close,
  setValue,
  setCurrentRating,
}) => {
  const [newRating, setNewRating] = useState(findRatingById(id));

  const handlerSaveRating = () => {
    setValue(true);
    changeStorage(id, newRating);
    setCurrentRating(newRating);
    close();
  };

  const handlerRemoveRating = () => {
    removeFromStorage(id);
    setNewRating(null);
    setValue(false);
    setCurrentRating(null);
    close();
  };

  return (
    <Modal
      classNames={{
        header: styles.modal__header,
        body: styles.modal__body,
      }}
      radius="md"
      opened={opened}
      onClose={close}
      title="Your rating"
      centered
    >
      <div className={styles.modal__content}>
        <h3 className={styles.modal__title}>{title}</h3>

        <Rating
          classNames={{
            root: styles.modal__rating,
            starSymbol: styles.modal__star,
          }}
          value={newRating}
          size="lg"
          count={10}
          onChange={setNewRating}
        />

        <ButtonUI
          onClick={handlerSaveRating}
          size="md"
          style={{ marginRight: "1rem" }}
          disabled={newRating === null ? true : false}
        >
          Save
        </ButtonUI>
        <ButtonText
          disabled={findRatingById(id) === null ? true : false}
          onClick={handlerRemoveRating}
        >
          Remove rating
        </ButtonText>
      </div>
    </Modal>
  );
};

export default ModalRating;
