import Testmonial from "../components/Home/testmonial/Testmonial";
import ServiceBanner from "../components/Service/ServiceBanner";
import Services from "../components/Service/Services";

function ServicePage() {
  return (
    <div>
      <ServiceBanner />
      <div className="">
        <Services />
      </div>
      <Testmonial />
      {/* <Footer classData={"bg-footer"} /> */}
    </div>
  );
}

export default ServicePage;
