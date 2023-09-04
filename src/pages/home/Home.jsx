import Header from "../../components/header/Header";
import HeroText from "../../components/heroText/HeroText";
import Hero from "../../components/hero/Hero";
import Testimonials from "../../components/testimonials/Testimonials";
import MyClients from "../../components/myClients/MyClients";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroText />
      <Hero />
      <Testimonials />
      <MyClients />
    </div>
  );
};

export default Home;
