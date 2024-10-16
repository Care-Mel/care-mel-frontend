import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Animation from "./animation";
import facebook from "./../assets/animation/facebook.json";
import Linkin from "./../assets/animation/linkedin.json";
import logo from "./../assets/image/home/Caremel.png";

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 sm:py-10 mt-8 sm:mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CareMel Logo Section */}
          <div className="flex flex-col items-start">
            <div className="mb-4">
              {/* Placeholder for CareMel Icon */}
              <img src={logo} alt="CareMel Icon" className="h-50 w-auto" />
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              We make it easy to find kind and skilled caregivers. Our simple
              process helps you get the right care for your loved ones fast.
            </p>
          </div>

          {/* Learn More and How we can help you Section */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
            {/* Learn More Section */}
            <div className="flex flex-col">
              <h4 className="text-xl sm:text-2xl font-semibold text-primary mb-4">
                Learn More
              </h4>
              <ul className="text-sm font-bold text-gray-600 space-y-2">
                <li>About CAREMEL</li>
                <li>CAREMEL Services</li>
              </ul>
            </div>

            {/* How we can help you Section */}
            <div className="flex flex-col">
              <h4 className="text-xl sm:text-2xl font-semibold text-primary mb-4">
                How we can help you
              </h4>
              <ul className="text-sm font-bold text-gray-600 space-y-2">
                <li>Hiring a caregiver</li>
                <li>Apply for a caregiver job</li>
              </ul>
            </div>
          </div>

          {/* Contact and Social Section */}
          <div className="flex flex-col">
            <div className="mb-8">
              <h4 className="text-xl sm:text-2xl font-semibold text-primary mb-4">
                Contact Us
              </h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-center">
                  <FaPhoneAlt className="mr-3 text-primary" />
                  <span>09745212996 (During Office Hours)</span>
                </li>
                <li className="flex items-center">
                  <MdOutlineEmail className="mr-3 text-primary" />
                  <span>caremel@gmail.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl text-primary font-semibold mb-4">
                Follow us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Animation
                    animationData={facebook}
                    style={{ width: "24px", height: "24px" }}
                  />
                </a>
                <a
                  href="#"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <Animation
                    animationData={Linkin}
                    style={{ width: "24px", height: "24px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
