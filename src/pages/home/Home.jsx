import Header from "../../components/header/Header";
import HeroText from "../../components/heroText/HeroText";
import Hero from "../../components/hero/Hero";
import Testimonials from "../../components/testimonials/Testimonials";
import MyClients from "../../components/myClients/MyClients";
import BrandServices from "../../components/brandServices/BrandServices";
import styles from "./Home.module.scss";
import SelectedWork from "../../components/selectedWork/SelectedWork";
import Frames from "../../components/frames/Frames";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import ScrollAnimation from "../../components/scrollAnimation/ScrollAnimation";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <HeroText />
      <Hero />
      <Testimonials />
      <MyClients />
      <BrandServices />
      <SelectedWork />
      <div className={styles.frames}>
        <Frames />
      </div>

      <ScrollAnimation
        text="LET'S WORK TOGETHER"
        text1="LET'S WORK TOGETHER"
        text2="LET'S WORK TOGETHER"
      />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
