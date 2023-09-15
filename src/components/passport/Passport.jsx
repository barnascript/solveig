import styles from "./Passport.module.scss";

const Passport = ({ image, name, skill }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.person}>
        <img src={image} alt="brand-designer" />
        <div className={styles.description}>
          <h5>{name}</h5>
          <span className={`meta_text ${styles.position}`}>{skill}</span>
        </div>
      </div>
    </div>
  );
};

export default Passport;
