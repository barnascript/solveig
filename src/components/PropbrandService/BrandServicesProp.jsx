import styles from "./BrandServiceProp.module.scss";
import star from "../../assets/icons/star.svg";

const BrandServicesProp = ({
  title,
  category,
  category2,
  category3,
  description,
  description1,
  description2,
}) => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.brand_services}>
        <div className={styles.title}>
          <img src={star} alt="star-logo" />
          <span className={`heading_small ${styles.name}`}>{title}</span>
        </div>
      </div>
      <div className={styles.brand_texts}>
        {" "}
        <div className={styles.brand_text}>
          <div className={styles.number}>
            <img src={star} alt="star-logo" />
            <h3>{category}</h3>
          </div>
          <p>{description}</p>
        </div>
        <div className={styles.brand_text}>
          <div className={styles.number}>
            <img src={star} alt="star-logo" />

            <h3>{category2}</h3>
          </div>
          <p>{description1}</p>
        </div>
        <div className={styles.brand_text}>
          <div className={styles.number}>
            <img src={star} alt="star-logo" />

            <h3>{category3}</h3>
          </div>
          <p>{description2}</p>
        </div>
      </div>
    </div>
  );
};

export default BrandServicesProp;
