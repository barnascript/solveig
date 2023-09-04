import styles from "./BrandService.module.scss";
import star from "../../assets/icons/star.svg";
import passport from "../../assets/images/passport.png";
const BrandServices = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.brand_services}>
        <div className={styles.title}>
          <img src={star} alt="star-logo" />
          <span className={`heading_small ${styles.name}`}>Brand Services</span>
        </div>
        <div className={styles.person}>
          <img src={passport} alt="brand-designer" />
          <div className={styles.description}>
            <h5>HI, I'M FINN</h5>
            <span className={`meta_text ${styles.position}`}>
              BRAND DESIGNER
            </span>
          </div>
        </div>
      </div>
      <div className={styles.brand_texts}>
        {" "}
        <div className={styles.brand_text}>
          <div className={styles.number}>
            <h3>01</h3>
            <h3>.</h3>
            <h3>Branding</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
            quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Massa
            tempor nec feugiat nisl
          </p>
        </div>
        <div className={styles.brand_text}>
          <div className={styles.number}>
            <h3>02</h3>
            <h3>.</h3>
            <h3>Logo Design</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
            quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Massa
            tempor nec feugiat nisl
          </p>
        </div>
        <div className={styles.brand_text}>
          <div className={styles.number}>
            <h3>03</h3>
            <h3>.</h3>
            <h3>Social Media</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
            quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Massa
            tempor nec feugiat nisl
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandServices;
