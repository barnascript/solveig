import styles from "./Testimonials.module.scss";

const Testimonials = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.testimonials}>
        <div className={styles.testimonial}>
          <div className={styles.border_top}></div>
          <span className={`meta_text ${styles.name}`}>CLIENT</span>
          <div className={`big_text ${styles.number}`}>
            <span className={styles.value}>200</span>
            <span className={styles.plus}>+</span>
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.border_top}></div>
          <span className={`meta_text ${styles.name}`}>PROJECTS</span>
          <div className={`big_text ${styles.number}`}>
            <span className={styles.value}>300</span>
            <span className={styles.plus}>+</span>
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.border_top}></div>
          <span className={`meta_text ${styles.name}`}>FOLLOWERS</span>
          <div className={`big_text ${styles.number}`}>
            <span className={styles.value}>90</span>
            <span className={styles.plus}>K</span>
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.border_top}></div>
          <span className={`meta_text ${styles.name}`}>HAPPY CLIENTS</span>
          <div className={`big_text ${styles.number}`}>
            <span className={styles.value}>100</span>
            <span className={styles.plus}>%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
