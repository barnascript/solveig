import styles from "./Hero.module.scss";
import ScrollAnimation from "../scrollAnimation/ScrollAnimation";

const Hero = ({ image }) => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.image_div}>
        <ScrollAnimation
          text="BRANDING"
          text1="LOGO DESIGN"
          text2="SOCIAL MEDIA"
          dot=""
        />
        <img src={image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
