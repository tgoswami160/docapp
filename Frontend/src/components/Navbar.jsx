import React, { useEffect, useState } from "react";
import assets from "../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AppContext";
import { motion } from "motion/react"

const Navbar = () => {
  const navigate = useNavigate();
  const {token, setToken,user, setUser} = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken) setToken(storedToken);
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    navigate("/home");
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex justify-between items-center">
        
        <Link to="/home">
          <img src={assets.logo} alt="logo" className="w-28 h-14 object-contain" />
        </Link>

        
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/home" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/all-doctors" className="hover:text-blue-500 transition">All Doctors</Link>
          <Link to="/about-us" className="hover:text-blue-500 transition">About Us</Link>
          <Link to="/contact-us" className="hover:text-blue-500 transition">Contact Us</Link>
        </div>

        
        <div className="flex items-center gap-4">
          {!token ? (
            <Link to={"/create-account"}>
              <motion.button whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }} className="bg-blue-500 px-5 py-2 text-white rounded-full transition">
                Create account
              </motion.button>
            </Link>
          ) : (
            <div className="relative">
              <img
                src={assets.logo}
                alt="profile"
                className="w-10 h-10 rounded-full border cursor-pointer"
                onClick={() => setProfileOpen(!profileOpen)}
              />
              {profileOpen && (
                <ul className="absolute right-0 mt-7 w-48 bg-white border border-gray-200 rounded-lg shadow-lg text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:font-semibold transition">My Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:font-semibold transition">My Appointments</li>
                  <li
                    className="px-4 py-2 text-red-500 hover:bg-red-100 cursor-pointer hover:font-semibold transition"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              )}
            </div>
          )}

          
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <Link to="/home" className="block px-6 py-3 hover:bg-gray-100 hover:font-semibold transition">Home</Link>
          <Link to="/all-doctors" className="block px-6 py-3 hover:bg-gray-100 hover:font-semibold transition">All Doctors</Link>
          <Link to="/about-us" className="block px-6 py-3 hover:bg-gray-100 hover:font-semibold transition">About</Link>
          <Link to="/contact-us" className="block px-6 py-3 hover:bg-gray-100 hover:font-semibold transition">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
