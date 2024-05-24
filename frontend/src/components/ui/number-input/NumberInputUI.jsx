import { NumberInput } from "@mantine/core";
import { useRef } from "react";
import NumberInputArrows from "./NumberInputArrows";

import styles from "./NumberInputUI.module.css";

const NumberInputUI = ({ value, onChange, label, placeholder }) => {
  const handlersRatingRef = useRef(null);

  return (
    <NumberInput
      classNames={{
        root: styles.root,
        input: styles.input,
        label: styles.label,
      }}
      
      label={label}
      placeholder={placeholder}
      clampBehavior="strict"
      min={0}
      max={10}
      step={1}
      handlersRef={handlersRatingRef}
      value={value}
      onChange={onChange}
      rightSectionPointerEvents="all"
      rightSection={
        <NumberInputArrows
          onClickUp={() => handlersRatingRef.current?.increment()}
          onClickDown={() => handlersRatingRef.current?.decrement()}
        />
      }
    />
  );
};

export default NumberInputUI;
