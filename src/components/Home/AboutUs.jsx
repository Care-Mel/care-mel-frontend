import { useState } from "react";
import elder from "./../../assets/image/home/eldercare.png";
import infant from "./../../assets/image/home/infantcare.png";
import hospital from "./../../assets/image/home/hospital.png";
import child from "./../../assets/image/home/childcare.png";
import { FaBaby, FaChild, FaHospitalAlt, FaUserFriends } from "react-icons/fa";
const AboutUs = ({ classData }) => {
  const [selectedService, setSelectedService] = useState("childCare");

  const services = {
    childCare: {
      icon: <FaBaby />, // Icon for Child Care
      image: child, // Replace with relevant image path
      title: "Child Care",
      description:
        "“Our Child Care service provides safe, personalized support for your child's well-being and growth, delivered by compassionate caregivers you can trust.”",
    },
    newbornCare: {
      icon: <FaChild />, // Icon for Newborn Care
      image: infant, // Replace with relevant image path
      title: "Newborn Care",
      description:
        "“Our Newborn Care service ensures that your baby receives the utmost care and support tailored to their unique needs.”",
    },
    hospitalCare: {
      icon: <FaHospitalAlt />, // Icon for Hospital Companion Care
      image: hospital, // Replace with relevant image path
      title: "Hospital Companion Care",
      description:
        "“Our Hospital Companion Care service provides necessary support and companionship for your loved ones during their hospital stay.”",
    },
    elderCare: {
      icon: <FaUserFriends />, // Icon for Elder Care
      image: elder, // Replace with relevant image path
      title: "Elder Care",
      description:
        "“Our Elder Care service focuses on ensuring the comfort and health of your elderly loved ones.”",
    },
  };

  const handleServiceChange = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="mx-auto p-5 md:p-10">
      <div className={`${classData} mx-auto`}>
        <p className="header-text font-bold md:text-center">
          Compassionate Care for Every Family
        </p>
        <p className="body-text md:w-[550px] mx-auto md:text-center mt-5">
          Whether you need daily support or occasional assistance, our care
          services are designed to provide your family with dependable,
          nurturing care.
        </p>
      </div>
      <div className="w-[320px] sm:w-full mx-auto md:flex flex-col md:flex-row items-start mt-10 space-y-4 md:space-y-0 md:space-x-4">
        <div className="bg-sub h-full md:h-[250px] lg:h-[300px] flex flex-col justify-center px-4 rounded-lg mb-4 md:mb-0 mx-auto w-full sm:w-[300px] md:w-1/3">
          <ul className="flex md:flex-col h-full justify-between md:py-8 py-4">
            {Object.keys(services).map((serviceKey) => (
              <li
                key={serviceKey}
                className={`flex items-center md:mb-2 cursor-pointer px-4 md:py-3 py-4 rounded-md text-lg font-medium ${
                  selectedService === serviceKey
                    ? "bg-primary text-white"
                    : "hover:bg-primary hover:text-white"
                }`}
                onClick={() => handleServiceChange(serviceKey)}
              >
                <p className="flex text-xl  items-center ">
                  {services[serviceKey]?.icon}
                  <span className="ms-2 text-sm md:text-md lg:text-xl hidden md:block">
                    {services[serviceKey].title}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-sub rounded-lg md:h-[250px] lg:h-[300px] lg p-6 sm:flex items-center md:w-2/3">
          <div className="h-[200px] sm:w-[764px] md:h-[221px] lg:h-[250px] overflow:hodden sm:mr-4">
            <img
              src={services[selectedService].image}
              alt={services[selectedService].title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex-grow h-full flex flex-col justify-between mt-5 sm:mt-0">
            <h3 className="font-bold sm:text-xl lg:text-3xl">
              {services[selectedService].title}
            </h3>
            <p className="mb-4 text-sm lg:text-[22px] lg:leading-8 mt-3 md:mt-0">
              {services[selectedService].description}
            </p>
            <button className=" lg:w-[300px] text-md text-green-500 bg-white font-bold border border-primary rounded-xl py-2 px-4 hover:bg-primary transition duration-300 hover:text-white">
              Discover Our {services[selectedService].title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
