import styles from "./Work.module.scss";
import Header from "../../components/header/Header";
import Frame from "../../components/frames/frame/Frame";
import frame1 from "../../assets/images/frame1.png";
import frame2 from "../../assets/images/frame2.png";
import frame3 from "../../assets/images/frame3.png";
import ScrollAnimation from "../../components/scrollAnimation/ScrollAnimation";
import Footer from "../../components/footer/Footer";

const Work = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.work_text_div}>
        <span
          className={`heading_medium ${styles.work_text}`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "ClashDisplay-Bold",
            paddingTop: "50px",
            paddingBottom: "100px",
            fontSize: "clamp(3rem, 8vw, 7rem)",
          }}
        >
          WORK
        </span>
      </div>
      <div className={`sw ${styles.frames}`}>
        <div className={`sw ${styles.frame}`}>
          {" "}
          <Frame
            image={frame1}
            title="VISION BRANDING"
            category="LOGO DESIGN"
          />
        </div>
        <div className={`sw ${styles.frame}`}>
          <Frame image={frame2} title="BRAND STUDIO" category="BRANDING" />
        </div>
        <div className={`sw ${styles.frame}`}>
          {" "}
          <Frame image={frame3} title="LOGO AGENCY" category="SOCIAL MEDIA" />
        </div>
        <div className={`sw ${styles.frame}`}>
          {" "}
          <Frame image={frame1} title="DESIGN AGENCY" category="BRANDING" />
        </div>
      </div>
      <div>
        <ScrollAnimation
          text="LET'S WORK TOGETHER"
          text1="LET'S WORK TOGETHER"
          text2="LET'S WORK TOGETHER"
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Work;
