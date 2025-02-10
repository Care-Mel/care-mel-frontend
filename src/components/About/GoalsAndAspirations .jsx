// import React from "react";
import goal from "./../../assets/image/about/goal.png";
import vision from "./../../assets/image/about/assss.jpg";

const GoalsAndAspirations = () => {
  return (
    <div className="md:w-[800px] lg:w-[1000px] mx-auto p-5 md:p-10 mt-[80px] sm:mt-[100px] md:mt-[120px] lg:mt-[150px] min-h-[100vh] flex md:justify-center md:items-center">
      <div className="">
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
                <p className="text-[16px] sourcesans">
                  Our mission is to provide compassionate, high-quality
                  caregiver services that empower families and enhance the
                  well-being of their loved ones. We are committed to fostering
                  trust and delivering personalized care that meets individual
                  needs.
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
              <p className="text-[16px] sourcesans me-10">
                Our vision is to be a leader in the caregiving industry,
                recognized for our dedication to excellence and innovation. We
                aim to create a supportive community where every family feels
                valued and every caregiver is empowered to make a positive
                impact.
              </p>
            </div>
            <div className="w-full md:w-1/2 overflow-hidden flex justify-end">
              <img
                src={vision}
                alt="Vision"
                className="object-cover w-full md:w-[380px] h-[280px] rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:hidden">
              <p className="body-text mt-5 md:mt-0 md:me-10">
                Our vision is to be a leader in the caregiving industry,
                recognized for our dedication to excellence and innovation. We
                aim to create a supportive community where every family feels
                valued and every caregiver is empowered to make a positive
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsAndAspirations;
