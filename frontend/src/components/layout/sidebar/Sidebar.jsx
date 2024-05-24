import cn from "classnames";

import Logo from "../../../assets/images/logo.png";

import Navigation from "./navigation/Navigation";

import styles from "./Sidebar.module.css";

const Sidebar = ({ opened, close }) => {
  return (
    <div
      className={cn(
        {
          [styles.sidebar_opened]: opened,
        },
        styles.sidebar
      )}
    >
      <img className={styles.sidebar__logo} src={Logo} alt="Logo" />
      <Navigation close={close} />
    </div>
  );
};

export default Sidebar;
