// import React from 'react';
import missionImage from "./../../assets/image/home/mission.jpg"; // Update with the actual image path
// import Collaborate from "./Collaborate";
const Mission = () => {
  return (
    <div className="container px-10 mx-auto p-6">
      <h2 className="header-text font-bold text-green-800 text-center">
        Our Mission: Caring for Every Family
      </h2>
      <p className="body-text text-gray-700 mt-2 text-center">
        We’re here to make caregiving a positive, reassuring <br /> experience
        for every family.
      </p>
      <div className="flex flex-col md:flex-row items-center mt-6 bg-white rounded-lg py-4">
        <div className="md:w-1/2">
          <img
            src={missionImage}
            alt="Caring Family"
            className="w-full h-auto rounded-lg mt-4 md:mt-0 pr-4"
          />
        </div>
        <div className="md:w-1/2 px-5 flex flex-col justify-center">
          <p className="body-text font-medium mb-4">
            We’re dedicated to making caregiving a positive experience for every
            family. Our team provides compassionate, personalized support,
            ensuring your loved ones feel respected and cared for.
          </p>
          <p className="body-text font-medium mb-4">
            With a focus on quality and trust, we create care plans that fit
            each family’s unique needs, giving you peace of mind every step of
            the way.
          </p>
          <a
            href="#"
            className="mt-4 w-[200px] inline-block border border-green-500 text-green-500 hover:bg-green-700 hover:text-white font-bold rounded-md py-2 px-4 transition duration-300"
          >
            Meet Our Care Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mission;
