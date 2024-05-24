import Sidebar from "./sidebar/Sidebar";

import styles from "./Layout.module.css";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const [opened, { toggle, close }] = useDisclosure();

  useEffect(() => {
    if (opened && window.innerWidth <= 576) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [opened]);

  return (
    <div className={styles.layout}>
      <Sidebar opened={opened} close={close} />
      <div className={styles.layout__content}>
        <div className={styles.layout__burger}>
          <Burger opened={opened} onClick={toggle} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
