import React from "react";
import assets from "../assets/assets.js";

const ContactUs = () => {
  return (
    <section className="flex flex-col items-center justify-center p-6 bg-gray-50">
      
      <h3 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h3>

      
      <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-4xl gap-4">
        
        
        <img
          src={assets.logo}
          alt="office"
          className="w-full md:w-1/3 h-64 md:h-auto object-cover"
        />

        
        <div className="flex flex-col gap-2 p-6 md:p-10 w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Office</h2>

          <a
            href="https://maps.app.goo.gl/LoLWE2uoryZL3a5t8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Lal Kuan, Ghaziabad, Uttar Pradesh, India
          </a>

          <a
            href="tel:+917217888531"
            className="text-gray-700 hover:text-blue-600"
          >
            +91-7217888531
          </a>

          <a
            href="mailto:goswamit241@gmail.com"
            className="text-gray-700 hover:text-blue-600"
          >
            goswamit241@gmail.com
          </a>

          
          <div className="flex gap-5 mt-4">
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
    </section>
  );
};

export default ContactUs;
