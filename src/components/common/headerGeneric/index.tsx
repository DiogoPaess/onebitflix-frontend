import { Button, Container } from "reactstrap";
import styles from "./style.module.scss";
import Link from "next/link";

interface props {
  logoUrl: string;
  btnUrl: string;
  btnContent: string;
}

const HeaderGeneric = function ({ logoUrl, btnUrl, btnContent }: props) {
  return (
    <>
      <div className={styles.header}>
        <Container className={styles.headerContainer}>
          <Link href={logoUrl}>
            <img
              src="/logoOnebitflix.svg"
              alt="logoRegister"
              className={styles.headerLogo}
            />
          </Link>
          <Link href={btnUrl}>
            <Button outline color="light" className={styles.headerBtn}>
              {btnContent}
            </Button>
          </Link>
        </Container>
      </div>
    </>
  );
};

export default HeaderGeneric;
