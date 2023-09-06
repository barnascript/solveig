import styles from "./Passport.module.scss";
import passport from "../../assets/images/passport.png";

const Passport = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.person}>
        <img src={passport} alt="brand-designer" />
        <div className={styles.description}>
          <h5>HI, I'M FINN</h5>
          <span className={`meta_text ${styles.position}`}>BRAND DESIGNER</span>
        </div>
      </div>
    </div>
  );
};

export default Passport;
