import Header from "../../components/header/Header";
import HeroText from "../../components/heroText/HeroText";
import Hero from "../../components/hero/Hero";
import Testimonials from "../../components/testimonials/Testimonials";
import MyClients from "../../components/myClients/MyClients";
import BrandServices from "../../components/brandServices/BrandServices";
import BrandText from "../../components/brandTexts/BrandText";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroText />
      <Hero />
      <Testimonials />
      <MyClients />
      <BrandServices />
    </div>
  );
};

export default Home;
