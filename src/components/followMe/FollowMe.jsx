import styles from "./FollowMe.module.scss";

const FollowMe = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`sw ${styles.container}`}>
        <h3>FOLLOW ME</h3>
        <div className={styles.links}>
          <div className={styles.link}>
            <div className={styles.line}></div>
            <span className={styles.social_media}>INSTAGRAM</span>
          </div>
          <div className={styles.link}>
            <div className={styles.line}></div>
            <span className={styles.social_media}>TWITTER</span>
          </div>
          <div className={styles.link}>
            <div className={styles.line}></div>
            <span className={styles.social_media}>DRIBBLE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowMe;
