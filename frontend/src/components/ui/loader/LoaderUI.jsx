import { Loader } from "@mantine/core";

import styles from "./LoaderUI.module.css";

const LoaderUI = () => {
  return (
    <div className={styles.loader}>
      <Loader color="#9854F6" size="xl" />
    </div>
  );
};

export default LoaderUI;
