import React from "react";
import assets from "../assets/assets.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  mx-20 p-1 border-b-2 border-gray-200 ">
      <Link to="/home">
        <img src={assets.logo} alt="logo" className="m-1 w-30 h-20" />
      </Link>
      <div className="flex flex-wrap lg:gap-10 gap-3 ">
        <Link to="/home">Home</Link>
        <Link to="/all-doctors">All Doctors</Link>
        <Link to="/about-us">About</Link>
        <Link to="/contact-us">Contact</Link>
      </div>
      <Link to="/create-account">
      <button className="bg-blue-400 p-3 text-white rounded-full cursor-pointer">
        Create account
      </button>
      </Link>
    </div>
  );
};

export default Navbar;
