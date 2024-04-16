import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Footer = function () {
  return (
    <>
      <Container className={styles.footer}>
        <img
          src="/logoOnebitcode.svg"
          alt="logofooter"
          className={styles.footerLogo}
        />
        <a
          href="htpp://onebitcode.com"
          target={"blank"}
          className={styles.footerLink}
        >
          ONEBITCODE.COM
        </a>
      </Container>
    </>
  );
};

export default Footer;
