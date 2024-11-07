import { useState } from "react";
import elder from "./../../assets/image/home/eldercare.png";
import infant from "./../../assets/image/home/infantcare.png";
import hospital from "./../../assets/image/home/hospital.png";
// import chronic from "./../../../assets/image/home/chronicare.png";
import child from "./../../assets/image/home/childcare.png";

const AboutUs = () => {
  const [selectedService, setSelectedService] = useState("childCare");

  const services = {
    childCare: {
      image: child,
      title: "Child Care",
      description:
        "“Our Child Care service provides safe, personalized support for your child's well-being and growth, delivered by compassionate caregivers you can trust.”",
    },
    newbornCare: {
      image: infant, // Change to a relevant image
      title: "Newborn Care",
      description:
        "“Our Newborn Care service ensures that your baby receives the utmost care and support tailored to their unique needs.”",
    },
    hospitalCare: {
      image: hospital, // Change to a relevant image
      title: "Hospital Companion Care",
      description:
        "“Our Hospital Companion Care service provides necessary support and companionship for your loved ones during their hospital stay.”",
    },
    elderCare: {
      image: elder, // Change to a relevant image
      title: "Elder Care",
      description:
        "“Our Elder Care service focuses on ensuring the comfort and health of your elderly loved ones.”",
    },
  };

  const handleServiceChange = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="container mx-auto p-10">
      <div className="mx-auto">
        <p className="header-text font-bold text-center">
          Compassionate Care for Every Family
        </p>
        <p className="body-text w-[550px] mx-auto text-center mt-5">
          Whether you need daily support or occasional assistance, our care
          services are designed to provide your family with dependable,
          nurturing care.
        </p>
      </div>
      <div className="w-[1000px] mx-auto flex flex-col md:flex-row items-start mt-10 space-y-4 md:space-y-0 md:space-x-4">
        <div className="bg-slate-200 h-[250px] flex flex-col justify-center px-4 rounded-lg mb-4 md:mb-0 md:w-1/3">
          <ul>
            {Object.keys(services).map((serviceKey) => (
              <li
                key={serviceKey}
                className={`flex items-center mb-2 cursor-pointer px-4 py-2 rounded-md text-lg font-medium ${
                  selectedService === serviceKey
                    ? "bg-green-600 text-white"
                    : "hover:bg-green-600 hover:text-white"
                }`}
                onClick={() => handleServiceChange(serviceKey)}
              >
                {services[serviceKey].title}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-200 rounded-lg shadow-lg h-[250px] p-6 flex items-center md:w-2/3">
          <div className="w-[764px] h-[211px] mr-4">
            <img
              src={services[selectedService].image}
              alt={services[selectedService].title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex-grow h-full flex flex-col justify-between">
            <h3 className="font-bold text-2xl">
              {services[selectedService].title}
            </h3>
            <p className="mb-4 text-[14px]">
              {services[selectedService].description}
            </p>
            <a
              href="#"
              className="text-green-500 bg-white font-bold border border-green-500 rounded-md py-2 px-4 hover:bg-green-600 transition duration-300 hover:text-white"
            >
              Discover Our {services[selectedService].title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
