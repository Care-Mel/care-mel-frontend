// import React from "react";
import logo1 from "./../../assets/image/crossborder.png";
import logo2 from "./../../assets/image/home/client.svg";
import logo3 from "./../../assets/image/otas.png";
import logo4 from "./../../assets/image/home/Platocare.png";
import goal from "./../../assets/image/about/goal.png";
import vision from "./../../assets/image/about/about.svg";

const partners = [
  { name: "Apostle Med", logo: logo1 }, // Replace with actual logo URL
  {
    name: "Cross-Border Health and Caregiving Club",
    logo: logo2,
  }, // Replace with actual logo URL
  { name: "OTAS Tech Solutions", logo: logo3 }, // Replace with actual logo URL
  { name: "Plato Care", logo: logo4 }, // Replace with actual logo URL
];

const GoalsAndAspirations = () => {
  return (
    <div className="md:w-[800px] lg:w-[1000px] mx-auto p-5 md:p-10 mt-[80px] sm:mt-[100px] md:mt-[120px] lg:mt-[150px] min-h-[100vh]">
      <div className="mb-20 md:mb-10">
        <div className="mb-10">
          <div className="md:flex items-center w-full mb-2">
            <div className="w-full md:w-1/2 ">
              <img
                src={goal}
                alt="Mission"
                className="rounded-lg w-full md:w-[380px] h-[280px] object-cover shadow-lg mr-4"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="mt-5 md:mt-0 md:ms-10 ">
                <p className="text-[28px] mb-5 font-bold text-pridark ">
                  Your Family’s Trust, Our Guiding Promise
                </p>
                <p className="body-text md:text-[14px] sourcesans">
                  Our mission is to provide compassionate, high-quality
                  caregiver services that empower families and enhance the
                  well-being of their loved ones. We are committed to fostering
                  trust and delivering personalized care that meets individual
                  needs.We’re dedicated to empowering families through
                  compassionate, personalized care—combining expertise with
                  empathy to nurture well-being, build trust, and honor the
                  unique needs of every individual we serve.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-20">
          <div className="md:flex justiy-end items-center mb-2">
            <div className="w-full md:w-1/2 hidden md:block">
              <p className="text-[28px] mb-5 font-bold text-pridark ">
                Collaborate for Meaningful Change
              </p>
              <p className="text-[14px] sourcesans me-10">
                To redefine caregiving by leading with relentless excellence and
                meaningful innovation—building a world where families thrive
                with dignity, caregivers are celebrated for their impact, and
                every voice in our community is heard.
              </p>
            </div>
            <div className="w-full md:w-1/2 overflow-hidden flex justify-end">
              <img
                src={vision}
                alt="Vision"
                className="w-full md:w-[380px] h-[280px]"
              />
            </div>
            <div className="w-full md:hidden">
              <p className="body-text sourcesans mt-5 md:mt-0 md:me-10">
                To redefine caregiving by leading with relentless excellence and
                meaningful innovation—building a world where families thrive
                with dignity, caregivers are celebrated for their impact, and
                every voice in our community is heard.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:py-20 border-slate-300 flex flex-col items-center md:items-start rounded-lg py-5 md:py-0">
        <h2 className="text-center mx-auto header-text font-bold sm:mb-0 md:mb-4">
          Our Partner Organizations
        </h2>
        <div className="sm:flex items-center md:justify-start justify-center flex-wrap gap-4 sm:gap-10 md:gap-8 lg:gap-10 sm:mt-0 md:mt-10 mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col my-8 items-center justify-center"
            >
              <div>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 md:h-24 mb-1 sm:mb-2"
                />
              </div>
              <span className="w-[200px] mx-auto text-center text-sm sm:text-base md:text-lg">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalsAndAspirations;
