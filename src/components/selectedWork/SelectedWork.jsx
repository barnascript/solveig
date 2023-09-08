import styles from "./SelectedWork.module.scss";

const SelectedWork = ({ text }) => {
  // JavaScript code to trigger the animation when scrolling

  // JavaScript code to trigger the animation when scrolling
  // document.addEventListener("DOMContentLoaded", function () {
  //   const elementToAnimate = document.querySelector(".h2s");

  //   window.addEventListener("scroll", () => {
  //     const scrollPosition = window.scrollY;

  //     // Define the scroll threshold at which you want the animation to start
  //     const scrollThreshold = 100; // Adjust this value as needed

  //     if (scrollPosition >= scrollThreshold) {
  //       elementToAnimate.style.animation = "scroll-animation 1s forwards";
  //     } else {
  //       elementToAnimate.style.animation = "none";
  //     }
  //   });
  // });

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
