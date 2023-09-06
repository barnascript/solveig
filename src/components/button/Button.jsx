import styles from "./Button.module.scss";

const Button = ({ text }) => {
  return (
    <button className={`meta_small ${styles.button}`}>
      <div className={`meta_small ${styles.left_button_line}`}></div>
      <span>{text}</span>
      <div className={`meta_small ${styles.right_button_line}`}></div>
    </button>
  );
};

export default Button;
