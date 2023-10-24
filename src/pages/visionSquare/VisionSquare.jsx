import Header from "../../components/header/Header";
import WorkDetails from "../../components/workDetails/WorkDetails";
import styles from "./VisionSquare.module.scss";
import Hero from "../../components/hero/Hero";
import frame1 from "../../assets/images/frame1.png";
import frame2 from "../../assets/images/frame2.png";
import frame3 from "../../assets/images/frame3.png";
import BrandServicesProp from "../../components/PropbrandService/BrandServicesProp";
import SelectedWork from "../../components/selectedWork/SelectedWork";
import PreviousNext from "../../components/previousAndNext/PreviousNext";
import ScrollAnimation from "../../components/scrollAnimation/ScrollAnimation";
import Footer from "../../components/footer/Footer";

const VisionSquare = () => {
  return (
    <div>
      <Header />
      <span
        className={`heading_medium ${styles.work_text}`}
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          fontFamily: "ClashDisplay-Bold",
          paddingTop: "50px",
          paddingBottom: "100px",
          fontSize: "clamp(2.2rem, 8vw, 6 rem)",
          paddingInline: "10px",
        }}
      >
        VISION SQUARE
      </span>
      <WorkDetails />
      <Hero image={frame2} />
      <BrandServicesProp
        title="BRAND NEW BRANDING"
        category="CHALLENGE"
        category2="GOAL"
        category3="SOLUTION"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
        quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Massa
        tempor nec feugiat nisl"
        description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
        quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Massa
        tempor nec feugiat nisl"
        description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
        quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Massa
        tempor nec feugiat nisl"
      />
      <SelectedWork text="GALLERY" />
      <div className={`sw ${styles.images}`}>
        <div className={styles.image_div}>
          <img src={frame1} alt="frame1" />
        </div>
        <div className={styles.image_div}>
          <img src={frame2} alt="frame1" />
        </div>
        <div className={styles.image_div}>
          <img src={frame3} alt="frame1" />
        </div>
        <div className={styles.image_div}>
          <img src={frame2} alt="frame1" />
        </div>
      </div>
      <PreviousNext />
      <ScrollAnimation
        text="LET'S WORK TOGETHER"
        text1="LET'S WORK TOGETHER"
        text2="LET'S WORK TOGETHER"
      />
      <Footer />
    </div>
  );
};

export default VisionSquare;
