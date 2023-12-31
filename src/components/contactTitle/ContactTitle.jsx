import styles from "./ContactTitle.module.scss";
import Passport from "../passport/Passport";
import passport from "../../assets/images/passport.png";

const ContactTitle = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contact_container}>
        <div className={styles.contact_div}>
          <div className={styles.line}></div>
          <span className={styles.contact}>CONTACT</span>
        </div>
        <span className={`heading_medium ${styles.get_in_touch}`}>
          GET IN TOUCH
        </span>
      </div>
      <Passport image={passport} name="LEWIN JONES" skill="WEB DEVELOPER" />
    </div>
  );
};

export default ContactTitle;
