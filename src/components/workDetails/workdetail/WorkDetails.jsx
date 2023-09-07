import styles from "./WorkDetail.module.scss";

const WorkDetail = ({ category, description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.line}></div>
      <div className={styles.details}>
        <span className={`meta_text ${styles.category}`}>{category}</span>
        <h4>{description}</h4>
      </div>
    </div>
  );
};

export default WorkDetail;
