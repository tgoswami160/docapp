import React from "react";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full  ">
      
      <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-3 gap-8 ">
        
       
        <div>
          <Link to="/home">
            <img src={assets.logo} alt="logo" className="mb-4 w-36 h-auto" />
          </Link>
          <p className="text-sm text-gray-600 leading-relaxed">
            Making healthcare accessible and stress-free, our platform connects 
            you with experienced, verified doctors.
          </p>
        </div>

        
        <div className="mt-10 ">
          <h5 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link to="/home" className="hover:text-blue-600 transition">Home</Link>
            </li>
            <li>
              <Link to="/all-doctors" className="hover:text-blue-600 transition">All Doctors</Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-blue-600 transition">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-blue-600 transition">Contact Us</Link>
            </li>
          </ul>
        </div>

        
        <div className="mt-10">
          <h5 className="text-lg font-semibold text-gray-800 mb-4">Get in Touch</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="tel:+917217888531" className="hover:text-blue-600 transition">
                +91-7217888531
              </a>
            </li>
            <li>
              <a href="mailto:goswamit241@gmail.com" className="hover:text-blue-600 transition">
                goswamit241@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/place/Ghaziabad,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600"
              >
                Uttar Pradesh, India
              </a>
            </li>
          </ul>

          
          <div className="flex gap-4 mt-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedinLogo} alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.fbLogo} alt="Facebook" className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.instaLogo} alt="Instagram" className="w-6 h-6 hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>

     
      <div className="w-full text-center border-t border-gray-300 py-4 text-sm text-gray-500">
        © 2025 <span className="font-medium">tanu123.dev</span> — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
