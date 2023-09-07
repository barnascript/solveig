import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import star_logo from "../../assets/icons/star-logo.svg";
import { LiaTimesSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Button from "../button/Button";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.container}`}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={star_logo} alt="logo" />
          </Link>
        </div>
        <nav>
          <div className={styles.links}>
            <Link to="/work" className={` meta_text ${styles.link}`}>
              WORK
            </Link>
            <Link to="/contact" className={` meta_text ${styles.link}`}>
              CONTACT
            </Link>
            <Link className={` meta_text ${styles.link}`}>Clone template</Link>
          </div>
          <div className={styles.button}>
            <Button text="GET IN TOUCH" />
          </div>
        </nav>
      </div>
      <div className={`sw ${styles.mobile_container}`}>
        <div className={styles.logo}>
          <img src={star_logo} alt="logo" />
        </div>
        <div className={styles.togglers}>
          {!toggleMenu && (
            <RxHamburgerMenu
              className={styles.open_toggle}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          )}
          {toggleMenu && (
            <LiaTimesSolid
              className={styles.close_toggle}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          )}
        </div>
        {toggleMenu && (
          <nav>
            <div className={styles.links}>
              <Link className={` meta_text ${styles.link}`}>WORK</Link>
              <Link className={` meta_text ${styles.link}`}>CONTACT</Link>
            </div>
            <button className={`meta_small ${styles.button}`}>
              <div className={`meta_small ${styles.button_line}`}></div>
              <span>GET IN TOUCH</span>
            </button>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
