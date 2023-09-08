import styles from "./GetInTouch.module.scss";
import star from "../../assets/icons/star.svg";
import Button from "../button/Button";

const GetInTouch = () => {
  return (
    <div className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.container}`}>
        <img src={star} alt={star} />
        <div className={styles.create_brand_div}>
          <span className={styles.create_brand}>
            Let’s create your new brand{" "}
          </span>
        </div>
        <div className={styles.button}>
          <Button text="GET IN TOUCH" />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
