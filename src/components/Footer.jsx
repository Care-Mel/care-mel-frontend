// import React from 'react';
import logo from "./../assets/image/logo.png";

const Footer = ({ classData }) => {
  return (
    <footer className={`${classData} text-white pt-20 pb-8 px-5`}>
      <div className="mx-auto flex">
        <div className="flex flex-col w-full w-1/3">
          <img src={logo} alt="Logo" className="w-28" />
          <p className="mt-2 font-bold text-xl">
            Look For Daycare Services? <br />
            Call us straight away!
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-primary hover:text-green-300">
              <i className="fab fa-facebook-f"></i>{" "}
              {/* Make sure FontAwesome is included */}
            </a>
            <a href="#" className="text-primary hover:text-green-300">
              <i className="fab fa-linkedin-in"></i>{" "}
              {/* Make sure FontAwesome is included */}
            </a>
          </div>
        </div>

        <div className="flex w-full w-2/3 flex-col md:flex-row mt-10 sm:mt-0">
          <div className="flex flex-col w-full md:w-1/2">
            <h2 className="text-xl font-semibold text-primary">Services</h2>
            <ul className="mt-2 space-y-5 mt-5">
              <li className="">
                <a href="#" className="hover:text-green-300">
                  Child Care Service
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:text-green-300">
                  Newborn Care Service
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:text-green-300">
                  Hospital Companion Care Service
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:text-green-300">
                  Elder Care Service
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <h2 className="text-xl text-primary font-semibold">
              Contact With Us
            </h2>
            <p className="mt-5 text-lg font-semibold">
              091292312314 <br />
              <span className="text-sm font-medium">
                (During Office Hours 9 to 5)
              </span>
            </p>
            <p className="mt-5 font-semibold">
              <a
                href="mailto:carenekontact@mail.com"
                className="hover:text-green-300"
              >
                carenekontact@mail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
