import React from "react";
import styles from "./ScrollAnimation.module.scss";

const ScrollAnimation = ({ text, text1, text2, dot }) => {
  return (
    <div className={styles.moving_titles}>
      <div className={styles.moving_title}>
        <span className={styles.label}>{text}</span>
        <div className={styles.dot}></div>
        <span className={styles.label}>{text1}</span>
        <div className={styles.dot}></div>
        <span className={styles.label}>{text2}</span>
        <div className={styles.dot}></div>
        <span className={styles.label}>{text}</span>
        <div className={styles.dot}></div>
        <span className={styles.label}>{text1}</span>
        <div className={styles.dot}></div>
        <span className={styles.label}>{text2}</span>
        <div className={styles.dot}></div>
        <span className={styles.label}>{text}</span>
        <div className={styles.dot}></div>
        <span className={styles.label}>{text1}</span>
        <div className={styles.dot}></div>
        <span className={styles.label}>{text2}</span>
        <div className={styles.dot}></div>
        <span className={styles.label}>{text}</span>
        <span className={styles.dot}></span>
        <span className={styles.label}>{text1}</span>
        <span className={styles.dot}></span>
        <span className={styles.label}>{text2}</span>
        <span className={styles.dot}></span>
        <span className={styles.label}>{text2}</span>
        <div className={styles.dot}></div>
        <span className={styles.label}>{text}</span>
        <div className={styles.dot}></div>
        <span className={styles.label}>{text1}</span>
        <div className={styles.dot}></div>
        <span className={styles.label}>{text2}</span>
        <div className={styles.dot}></div>
        <span className={styles.label}>{text2}</span>
        <div className={styles.dot}></div>
        <span className={styles.label}>{text}</span>
        <div className={styles.dot}></div>
        <span className={styles.label}>{text1}</span>
        <div className={styles.dot}></div>
        <span className={styles.label}>{text2}</span>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
