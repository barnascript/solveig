import styles from "./Hero.module.scss";
import hero from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.image_div}>
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
