import React from "react";
import { motion } from "motion/react";

const AboutUs = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 mb-10">
      
      <div className="py-16 text-center">
        <h3 className="font-extrabold text-4xl text-blue-500 mb-6">About Us</h3>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
          Welcome to{" "}
          <span className="font-semibold text-blue-500">MediCore</span>, your
          trusted healthcare partner. We understand that finding the right
          doctor and booking an appointment can sometimes be stressful, so we
          built a platform that makes the process{" "}
          <span className="font-semibold">
            simple, reliable, and accessible
          </span>
          .
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At MediCore, our goal is to bridge the gap between patients and
          doctors by offering an easy way to book appointments online or
          offline. Whether you prefer a virtual consultation from home or an
          in-person visit, our platform connects you with
          <span className="font-semibold">
            {" "}
            qualified and verified doctors
          </span>{" "}
          across multiple specialties.
        </p>
      </div>

      
      <section className=" rounded-2xl p-12 ">
        <h3 className="font-extrabold text-3xl text-center text-blue-500 mb-15">
          Our Mission & Vision
        </h3>
        <div className="grid md:grid-cols-2 gap-8 text-gray-700 max-w-5xl mx-auto mb-10">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-xl text-gray-800 mb-2">
              Our Mission
            </h4>
            <p className="text-sm leading-relaxed">
              To make healthcare more{" "}
              <span className="font-semibold">
                accessible, affordable, and stress-free
              </span>
              . We aim to empower patients with seamless appointment booking and
              trusted medical consultations.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-xl text-gray-800 mb-2">
              Our Vision
            </h4>
            <p className="text-sm leading-relaxed">
              To become the most reliable healthcare platform where technology
              bridges the gap between patients and doctors, ensuring
              <span className="font-semibold">
                {" "}
                quality care anytime, anywhere
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      <h3 className="font-extrabold text-3xl text-center text-blue-500 mb-8">
        Why Choose Us?
      </h3>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 p-4">
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 lg:py-10 shadow-md rounded-2xl bg-white hover:bg-blue-300 hover:text-white transition"
        >
          <h4 className="font-semibold text-2xl">Easy Appointment Booking</h4>
          <p className="text-sm py-2">
            Schedule online or offline consultations in just a few clicks.
          </p>
        </motion.div>

        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 lg:py-10 shadow-md rounded-2xl bg-white hover:bg-blue-300 hover:text-white transition"
        >
          <h4 className="font-semibold text-2xl">Verified Doctors</h4>
          <p className="text-sm py-2">
            We connect you only with trusted and experienced healthcare
            professionals.
          </p>
        </motion.div>

        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 lg:py-10 shadow-md rounded-2xl bg-white hover:bg-blue-300 hover:text-white transition"
        >
          <h4 className="font-semibold text-2xl">Flexible Consultations</h4>
          <p className="text-sm py-2">
            Choose between virtual visits from home or in-person checkups at
            clinics.
          </p>
        </motion.div>

        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 lg:py-10 shadow-md rounded-2xl bg-white hover:bg-blue-300 hover:text-white transition"
        >
          <h4 className="font-semibold text-2xl">Time-Saving</h4>
          <p className="text-sm py-2">
            No more waiting in long queues—book at your convenience.
          </p>
        </motion.div>

        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 lg:py-10 shadow-md rounded-2xl bg-white hover:bg-blue-300 hover:text-white transition"
        >
          <h4 className="font-semibold text-2xl">Patient-Centered Care</h4>
          <p className="text-sm py-2">
            Your health and comfort are always our top priority.
          </p>
        </motion.div>

        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 lg:py-10 shadow-md rounded-2xl bg-white hover:bg-blue-300 hover:text-white transition"
        >
          <h4 className="font-semibold text-2xl">24/7 Accessibility</h4>
          <p className="text-sm py-2">
            Book anytime, anywhere, with instant confirmation.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
