// import React from "react";
import goal from "./../../assets/image/about/goal.png";
import vision from "./../../assets/image/about/Container.png";

const GoalsAndAspirations = () => {
  return (
    <div className="container w-[1000px] mx-auto px-10 mt-10">
      <h2 className="header-text font-bold text-green-700 text-center mb-10 ">
        Our Goals and Aspirations
      </h2>

      <div className="">
        <div className="mb-10">
          <div className="md:flex items-center  w-full mb-2">
            <div className="w-full md:w-1/3 ">
              <img
                src={goal}
                alt="Mission"
                className="rounded-lg object-cover shadow-lg mr-4"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="body-text ms-10">
                Our mission is to provide compassionate, high-quality caregiver
                services that empower families and enhance the well-being of
                their loved ones. We are committed to fostering trust and
                delivering personalized care that meets individual needs.
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex items-center mb-2">
            <div className="w-full md:w-2/3">
              <p className="body-text me-10">
                Our vision is to be a leader in the caregiving industry,
                recognized for our dedication to excellence and innovation. We
                aim to create a supportive community where every family feels
                valued and every caregiver is empowered to make a positive
                impact.
              </p>
            </div>
            <div className="w-full md:w-1/3 ">
              <img
                src={vision}
                alt="Vision"
                className="rounded-lg object-cover shadow-lg mr-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsAndAspirations;
