import ContactTitle from "../contactTitle/ContactTitle";
import Form from "../form/Form";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.contact_title}>
        <ContactTitle />
      </div>

      <div className={styles.form}>
        <Form />
      </div>
    </div>
  );
};

export default ContactForm;
