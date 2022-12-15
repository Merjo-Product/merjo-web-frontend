import React from "react";
import { Link } from "react-scroll";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white-800 p-6 shadow-none rounded-lg">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <a href="/">
          <img
            src="https://iili.io/HoEwquf.png"
            alt="logo"
            className="h-20 w-25"
          ></img>
        </a>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-700 hover:text-black mr-4 font-poppins font-bold"
          >
            <Link to="/">Home</Link>
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-700 hover:text-black mr-4 font-poppins font-bold"
          >
            <Link to="about-page" smooth={true} offset={-70} duration={1200}>
              About
            </Link>
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-700 hover:text-black mr-4 font-poppins font-bold"
          >
            <Link to="features-page" smooth={true} offset={-70} duration={1900}>
              Features
            </Link>
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-700 hover:text-black mr-4 font-poppins font-bold"
          >
            <Link to="pricing-page" smooth={true} offset={-70} duration={1900}>
              Pricing
            </Link>
          </a>
        </div>
        <div>
          <button class="text-white bg-blue-600 btn hover:bg-blue-700  font-poppins">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
