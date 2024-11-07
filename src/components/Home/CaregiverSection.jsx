// import React from "react";
import caregiverImage from "../../assets/image/home/caregiversection.png";

const CaregiverSection = ({ classData }) => {
  return (
    <div className={`${classData} py-6`}>
      <div className="container w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-between p-6 text-white">
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={caregiverImage} // Replace with your image URL
            alt="Caregiver"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 flex flex-col">
          <div className="mx-10">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Caregiver?
            </h2>
            <p className="mb-4">
              Contact us today to discover compassionate care solutions tailored
              to your family's needs. We're here to help you every step of the
              way!
            </p>
            <button className="mt-4 px-6 py-2 font-bold border border-white rounded-xl hover:bg-white hover:text-green-600 transition duration-300">
              Find Your Caregiver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaregiverSection;
