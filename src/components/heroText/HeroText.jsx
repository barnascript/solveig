import styles from "./HeroText.module.scss";
import hero_text from "../../assets/icons/hero-text.svg";

const HeroText = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.image_div}>
        <img src={hero_text} alt="hero" />
      </div>
      <div className={styles.h2}>
        <h2>Brand Designer from Berlin</h2>
      </div>
    </div>
  );
};

export default HeroText;
