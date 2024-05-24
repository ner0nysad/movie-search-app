import { Button } from "@mantine/core";

import styles from "./ButtonUI.module.css";

const ButtonUI = ({ children, onClick, size, style, disabled }) => {
  return (
    <Button
      className={styles.button}
      onClick={onClick}
      size={size}
      radius="md"
      style={style}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default ButtonUI;
