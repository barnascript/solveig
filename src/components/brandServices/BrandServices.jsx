import styles from "./BrandService.module.scss";
import star from "../../assets/icons/star.svg";
import Passport from "../passport/Passport";

const BrandServices = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.brand_services}>
        <div className={styles.title}>
          <img src={star} alt="star-logo" />
          <span className={`heading_small ${styles.name}`}>Brand Services</span>
        </div>
        <div className={styles.person}>
          <Passport />
        </div>
      </div>
      <div className={styles.brand_texts}>
        {" "}
        <div className={styles.brand_text}>
          <div className={styles.number}>
            <img src={star} alt="star-logo" />
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
            <img src={star} alt="star-logo" />

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
            <img src={star} alt="star-logo" />

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
