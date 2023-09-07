import styles from "./SelectedWork.module.scss";

const SelectedWork = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.line_break}></span>
      <div className={styles.h2s}>
        <h2>{text}</h2>
        <div className={styles.dot}></div>
        <h2>{text}</h2>
        <div className={styles.dot}></div>
        <h2>{text}</h2>
        <div className={styles.dot}></div>
        <h2>{text}</h2>
        <div className={styles.dot}></div>
        <h2>{text}</h2>
        <div className={styles.dot}></div>
        <h2>{text}</h2>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};

export default SelectedWork;
