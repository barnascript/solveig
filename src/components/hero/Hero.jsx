import styles from "./Hero.module.scss";
import hero from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.image_div}>
        <div className={styles.moving_titles}>
          <div className={styles.moving_title}>
            <span className={styles.label}>BRANDING</span>{" "}
            <span className={styles.dot}></span>
            <span className={styles.label}>LOGO DESIGN</span>
            <span className={styles.dot}></span>
            <span className={styles.label}>SOCIAL DESIGN</span>
            <span className={styles.dot}></span>
            <span className={styles.label}>BRANDING</span>{" "}
            <span className={styles.dot}></span>
            <span className={styles.label}>LOGO DESIGN</span>
            <span className={styles.dot}></span>
            <span className={styles.label}>SOCIAL DESIGN</span>
            <span className={styles.dot}></span>
            <span className={styles.label}>BRANDING</span>{" "}
            <span className={styles.dot}></span>
            <span className={styles.label}>LOGO DESIGN</span>
            <span className={styles.dot}></span>
            <span className={styles.label}>SOCIAL DESIGN</span>
            <span className={styles.dot}></span>
            <span className={styles.label}>BRANDING</span>{" "}
            <span className={styles.dot}></span>
          </div>

          <span className={styles.dot}></span>
        </div>
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
