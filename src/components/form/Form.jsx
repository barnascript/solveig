import styles from "./Form.module.scss";

function Form() {
  return (
    <div className={styles.wrapper}>
      <form>
        <input
          type="text"
          placeholder="Your Name"
          className={`meta_text ${styles.input}`}
        />
        <input
          type="text"
          placeholder="Your Email"
          className={`meta_text ${styles.input}`}
        />
        <textarea
          placeholder="Your Message"
          className={`meta_text ${styles.textarea}`}
        ></textarea>
        <button className={`meta_small ${styles.button}`}>SEND MESSAGE</button>
      </form>
    </div>
  );
}

export default Form;
