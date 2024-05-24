import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

import styles from "./NumberInputUI.module.css";

const NumberInputArrows = ({ onClickUp, onClickDown }) => {
  return (
    <div className={styles.arrows}>
      <IconChevronUp
        className={styles.arrow}
        size={12}
        stroke={1.5}
        onClick={onClickUp}
      />
      <IconChevronDown
        className={styles.arrow}
        size={12}
        stroke={1.5}
        onClick={onClickDown}
      />
    </div>
  );
};

export default NumberInputArrows;
