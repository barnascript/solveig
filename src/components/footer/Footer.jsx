import styles from "./Footer.module.scss";
import white_logo from "../../assets/icons/white_logo.svg";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`sw ${styles.container}`}>
        <img src={white_logo} alt="logo" />
        <div className={styles.links_div}>
          <span className={styles.links_title}>PAGES</span>
          <div className={styles.links}>
            <Link className={styles.link}>HOME</Link>
            <Link className={styles.link}>WORK</Link>
            <Link to="/work-single" className={styles.link}>
              WORK SINGLE
            </Link>
            <Button text="MORE TEMPLATES" />
          </div>
        </div>
        <div className={styles.links_div}>
          <span className={styles.links_title}>UTILITY PAGES</span>
          <div className={styles.links}>
            <Link className={styles.link}>404 ERROR PAGE</Link>
            <Link className={styles.link}>PASSWORD PROTECTED</Link>
            <Link className={styles.link}>LICENSING</Link>
          </div>
        </div>
      </div>
      <div className={`sw ${styles.container2}`}>
        <span className={`meta_text ${styles.copyright}`}>
          © 2022 Made by Pawel Gola. Powered by Webflow
        </span>
        <div className={styles.snippets}>
          <span className={`meta_text ${styles.snippet}`}>PRIVACY</span>
          <span className={`meta_text ${styles.snippet}`}>SNIPPET</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
