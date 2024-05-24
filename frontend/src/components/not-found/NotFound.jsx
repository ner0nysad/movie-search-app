import { useNavigate } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import NotFoundImage from "../../assets/images/not-found.png";
import ButtonUI from "../ui/button/ButtonUI";

import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigation = useNavigate();
  return (
    <div className={styles.not_found}>
      <img className={styles.not_found__logo} src={Logo} alt="Logo" />
      <img
        className={styles.not_found__image}
        src={NotFoundImage}
        alt="Page not found 404"
      />
      <h2 className={styles.not_found__title}>
        We can’t find the page you are looking for
      </h2>
      <ButtonUI onClick={() => navigation("/")} size="md">
        Go Home
      </ButtonUI>
    </div>
  );
};

export default NotFound;
