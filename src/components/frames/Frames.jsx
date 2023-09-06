import Frame from "./frame/Frame";
import styles from "./Frames.module.scss";
import frame1 from "../../assets/images/frame1.png";
import frame2 from "../../assets/images/frame2.png";

const Frames = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.frame}>
        <Frame image={frame1} title="ENVISION STUDIO" category="PACKAGING" />
      </div>
      <div className={styles.frame}>
        <Frame image={frame2} title="ENVISION STUDIO" category="POSTER" />
      </div>
    </div>
  );
};

export default Frames;
