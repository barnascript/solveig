import styles from "./Frame.module.scss";

const Frame = ({ image, title, category }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image_div}>
        <div className={styles.image_container}>
          <img src={image} alt={title} />
          <div className={styles.overlay}></div>
        </div>

        <div className={styles.description}>
          <h4>{title}</h4>
          <span className={`meta-text ${styles.category}`}>{category}</span>
        </div>
      </div>
    </div>
  );
};

export default Frame;
