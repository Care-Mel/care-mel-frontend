// import React from 'react';
import missionImage from "./../../assets/image/home/mission.jpg"; // Update with the actual image path
// import Collaborate from "./Collaborate";
const Mission = () => {
  return (
    <div className="mt-20 p-5 md:p-10 mx-auto md:text-center">
      <h2 className="header-text font-bold">
        Our Mission: Caring for Every Family
      </h2>
      <p className="body-text font-medium mt-2">
        We’re here to make caregiving a positive, reassuring <br /> experience
        for every family.
      </p>
      <div className="flex flex-col md:flex-row items-center md:mt-6 bg-white rounded-lg py-4">
        <div className="md:w-1/2">
          <img
            src={missionImage}
            alt="Caring Family"
            className="w-full h-full object-cover rounded-lg mt-5 md:mt-0 md:pr-4"
          />
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2 md:px-5 flex flex-col">
          <p className="body-text font-medium mb-4 text-start">
            We’re dedicated to making caregiving a positive experience for every
            family. Our team provides compassionate, personalized support,
            ensuring your loved ones feel respected and cared for.
          </p>
          <p className="body-text font-medium mb-4 text-start">
            With a focus on quality and trust, we create care plans that fit
            each family’s unique needs, giving you peace of mind every step of
            the way.
          </p>
          <button className="md:mt-0 mt-4 md:w-[200px] inline-block border border-green-500 text-green-500 hover:bg-green-700 hover:text-white font-bold rounded-xl py-2 px-4 transition duration-300">
            Meet Our Care Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mission;
