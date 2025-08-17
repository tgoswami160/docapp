import React from "react";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-30">
      <div className="flex justify-center mx-10 my-10 lg:gap-40 gap-18">
        <div className="flex flex-col">
          <Link to="/home">
            <img src={assets.logo} alt="logo" className="m-1 w-30 h-20" />
          </Link>
          <p>
            We are dedicated to making healthcare accessible and stress-free.
            Our platform connects you with a network of experienced, verified
            doctors, offering in-person and online consultations. Book
            appointments in minutes and get the care you deserve — anytime,
            anywhere.
          </p>
        </div>

        <div className="flex flex-col pt-10">
          <h5 className="text-2xl font-bold mb-4">Quick&nbsp;Links</h5>
          <Link to="/home">Home</Link>
          <Link to="/all-doctors">All Doctors</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>

        <div className="flex flex-col pt-10">
          <h5 className="text-2xl font-bold mb-4">Get in touch</h5>
          <a href="tel:+917217888531">+91-7217888531</a>
          <a href="mailto:goswamit241@gmail.com">goswamit241@gmail.com</a>
          <a
            href="https://www.google.com/maps/place/Ghaziabad,+India"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Ghaziabad, India
          </a>
        </div>
      </div>
      <div className="border-t-2 w-full text-center border-gray-300 mb-3 ">
        <p className="p-4">© 2025 tanu123.dev — All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
