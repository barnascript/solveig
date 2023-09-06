import styles from "./SelectedWork.module.scss";

const SelectedWork = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.line_break}></span>
      <div className={styles.h2s}>
        <h2>SELECTED WORK</h2>
        <div className={styles.dot}></div>
        <h2>SELECTED WORK</h2>
        <div className={styles.dot}></div>
        <h2>SELECTED WORK</h2>
        <div className={styles.dot}></div>
        <h2>SELECTED WORK</h2>
        <div className={styles.dot}></div>
        <h2>SELECTED WORK</h2>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};

export default SelectedWork;
