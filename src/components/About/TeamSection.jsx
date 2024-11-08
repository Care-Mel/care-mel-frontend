// import React from 'react';
import teamsection from "./../../assets/image/about/teamsection.png";

const TeamSection = () => {
  return (
    <div className="h-[90vh] px-5 md:px-10  mx-auto flex flex-col md:flex-row justify-center items-center">
      <div className="md:w-1/2 mb-4 md:mb-0">
        <h2 className="header-text font-bold">Meet Our Caring Team</h2>
        <p className="mt-2 body-text">
          Our dedicated caregivers provide personalized support tailored to your
          family’s needs. With compassion and professionalism, we’re here to
          ensure your loved ones receive the highest quality of care.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src={teamsection} // Replace with your image source
          alt="Caring Team"
          className="rounded-md object-cover shadow-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default TeamSection;
