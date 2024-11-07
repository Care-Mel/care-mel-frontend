// import React from "react";

import Testmonial from "../components/Home/testmonial/Testmonial";
import ServiceBanner from "../components/Service/ServiceBanner";
import Services from "../components/Service/Services";
import Footer from "./../components/Footer";

function ServicePage() {
  return (
    <div>
      <ServiceBanner />
      <Services />
      <Testmonial />
      <Footer classData={"bg-black"} />
    </div>
  );
}

export default ServicePage;
