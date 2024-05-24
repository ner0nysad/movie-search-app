import styles from "./BreadcrumbsUI.module.css";
import { Anchor, Breadcrumbs } from "@mantine/core";

const BreadcrumbsUI = ({ text }) => {
  const getItems = () => {
    return [
      { title: "Movies", href: "/" },
      { title: text, href: "#" },
    ].map((item, index) => (
      <Anchor className={styles.breadcrumbs__link} href={item.href} key={index}>
        {item.title}
      </Anchor>
    ));
  };

  return <Breadcrumbs className={styles.breadcrumbs}>{getItems()}</Breadcrumbs>;
};

export default BreadcrumbsUI;
