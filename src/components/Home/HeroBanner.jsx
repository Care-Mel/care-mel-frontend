import { motion } from "framer-motion";
import herobanner from "./../../assets/image/home/caremelBanner.jpg";

const HeroBanner = () => {
  return (
    <div className="px-5 md:px-10 mx-auto h-[90vh]">
      <div className="flex h-full items-center">
        <motion.div
          className="w-1/2 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={herobanner} alt="Hero Banner" className="shadow-sm" />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="ml-0 md:ml-5">
            <h2 className="header-text font-bold">
              Look For Daycare Services?
            </h2>
            <p className="header-text font-bold mt-2">Call us straight away!</p>
            <button className="mt-4 bg-primary body-text font-semibold text-white py-2 px-4 rounded-xl hover:bg-green-600 transition duration-200">
              Find Your Caregiver
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
