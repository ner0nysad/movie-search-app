import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

import styles from "./Navigation.module.css";

const NavigationItem = ({ item, close }) => {
  const { pathname } = useLocation();

  return (
    <li className={styles.navigation__item}>
      <Link
        onClick={close}
        to={item.link}
        className={cn(
          {
            [styles.navigation__link_active]:
              (item.title === "Movies" && pathname.includes("movies")) ||
              pathname === item.link,
          },
          styles.navigation__link
        )}
      >
        {item.title}
      </Link>
    </li>
  );
};

export default NavigationItem;
