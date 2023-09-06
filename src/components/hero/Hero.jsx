import styles from "./Hero.module.scss";
import hero from "../../assets/images/hero.jpg";
import ScrollAnimation from "../scrollAnimation/ScrollAnimation";

const Hero = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.image_div}>
        <ScrollAnimation
          text="BRANDING"
          text1="LOGO DESIGN"
          text2="SOCIAL MEDIA"
          dot=""
        />
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
