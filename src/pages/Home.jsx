import Footer from "../components/Footer";
import AboutUs from "../components/Home/AboutUs";
import Accordion from "../components/Home/Accordian";
import CaregiverSection from "../components/Home/CaregiverSection";
// import SimpleCareSolutions from "../components/Home/care/SimpleCareSoluutions";
import Collaborate from "../components/Home/Collaborate";
import HeroBanner from "../components/Home/HeroBanner";
import Mission from "../components/Home/Mission";
import Steps from "../components/Home/StepPage";
import Testmonial from "../components/Home/testmonial/Testmonial";

function Home() {
  return (
    <div className="">
      <HeroBanner />
      <AboutUs />
      <Mission />
      <Collaborate />
      <Steps />
      <Testmonial />
      <CaregiverSection classData="bg-gradient-to-r from-white to-green-500" />
      <Accordion />
      {/* <SimpleCareSolutions /> */}
      {/* <Collaborate /> */}
      <Footer classData="bg-footer" />
    </div>
  );
}

export default Home;
