import React, { useEffect, useState } from "react";
import assets from "../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate=useNavigate();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken) setToken(storedToken);
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setToken(null);
      setUser(null);
      Navigate('/home')
    
  };
  return (
    
    <div className="flex justify-between items-center  mx-20 p-1 border-b-2 border-gray-200">
      <Link to="/home">
        <img src={assets.logo} alt="logo" className="m-1 w-30 h-20" />
      </Link>
      <div className="flex flex-wrap lg:gap-10 gap-3">
        <Link to="/home" className="hover:text-blue-500 transition">
          Home
        </Link>
        <Link to="/all-doctors" className=" hover:text-blue-500 transition">
          All Doctors
        </Link>
        <Link to="/about-us" className=" hover:text-blue-500 transition">
          About
        </Link>
        <Link to="/contact-us" className=" hover:text-blue-500 transition">
          Contact
        </Link>
      </div>
      
      {!token ? (
        <Link to="/create-account">
          <button className="bg-blue-400 p-3 text-white rounded-full cursor-pointer">
            Create account
          </button>
        </Link>
      ) : (
        <div className="relative w-10 h-10">
          <img
            src={assets.logo}
            alt=""
            className="w-10 h-10 border border-gray-700 rounded-full cursor-pointer"
            onClick={() => setOpen(!open)}
          />

          {open && (
            <ul className="absolute right-0 mt-9 w-44 bg-white border border-gray-200 rounded shadow-lg text-gray-700 ">
              <li className="px-4 py-2 cursor-pointer hover:font-semibold ">
                My Profile
              </li>
              <li className="px-4 py-2 cursor-pointer hover:font-semibold">
                My Appointments
              </li>
              <li
                className="px-4 py-2 text-red-400 cursor-pointer hover:font-semibold"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
