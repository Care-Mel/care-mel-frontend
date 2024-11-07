import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* Logo */}
        <div className="text-green-600 font-bold text-lg">C A R E M E L</div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-lg font-semibold text-gray-800 hover:text-green-600"
                : "text-black text-lg font-semibold text-gray-800 hover:text-green-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-lg font-semibold text-gray-800 hover:text-green-600"
                : "text-black text-lg font-semibold text-gray-800 hover:text-green-600"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-lg font-semibold text-gray-800 hover:text-green-600"
                : "text-black text-lg font-semibold text-gray-800 hover:text-green-600"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-lg font-semibold text-gray-800 hover:text-green-600"
                : "text-black text-lg font-semibold text-gray-800 hover:text-green-600"
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Language Selector and Button */}
        <div className="hidden md:flex items-center space-x-2">
          <span className="text-gray-800">MYA / EN</span>
          <button className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-500">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? "✖" : "☰"} {/* Hamburger or Close icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-blue-500">
          <div className="flex flex-col p-4">
            <a href="#" className="text-gray-800 hover:text-green-600 my-2">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-green-600 my-2">
              About Us
            </a>
            <a href="#" className="text-gray-800 hover:text-green-600 my-2">
              Services
            </a>
            <a href="#" className="text-gray-800 hover:text-green-600 my-2">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
