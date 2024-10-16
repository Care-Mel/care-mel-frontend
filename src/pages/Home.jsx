import Footer from "../components/Footer";
import AboutUs from "../components/Home/AboutUs";
import SimpleCareSolutions from "../components/Home/care/SimpleCareSoluutions";
import Collaborate from "../components/Home/Collaborate";
import HeroBanner from "../components/Home/HeroBanner";

function Home() {
  return (
    <div className="">
      <HeroBanner />
      <AboutUs />
      <SimpleCareSolutions />
      <Collaborate />
      <Footer />
    </div>
  );
}

export default Home;
