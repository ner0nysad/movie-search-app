import { Button } from "@mantine/core";

import styles from "./ButtonText.module.css";

const ButtonText = ({ children, onClick, disabled, style }) => {
  return (
    <Button
      onClick={onClick}
      style={style}
      p={0}
      variant="transparent"
      classNames={{ root: styles.button }}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default ButtonText;
