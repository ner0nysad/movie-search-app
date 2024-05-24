import { navigationItems } from "./navigation.data";

import NavigationItem from "./NavigationItem";

import styles from "./Navigation.module.css";

const Navigation = ({ close }) => {
  return (
    <ul className={styles.navigation}>
      {navigationItems.map((item) => (
        <NavigationItem close={close} key={item.link} item={item} />
      ))}
    </ul>
  );
};

export default Navigation;
