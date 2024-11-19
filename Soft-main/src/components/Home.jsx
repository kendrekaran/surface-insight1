import React from "react";
import {useNavigate} from "react-router-dom";
import { motion } from "framer-motion"; // Import motion

function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Header Section with Animation */}
        <motion.header
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div
              className="cursor-pointer text-rose-600 text-2xl font-semibold"
              onClick={() => navigate("/")}
            >
              surface<span className="text-white">insight</span>
            </div>
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-6">
              <span
                className="cursor-pointer text-sm hover:text-rose-600 transition-colors"
                onClick={() => navigate("/surfaceai")}
              >
                SurfaceAI
              </span>
              <span
                className="cursor-pointer text-sm hover:text-rose-600 transition-colors"
                onClick={() => navigate("/blog")}
              >
                Blog
              </span>
              <span
                className="cursor-pointer text-sm hover:text-rose-600 transition-colors"
                onClick={() => navigate("/events")}
              >
                Events
              </span>
              <span
                className="cursor-pointer text-sm hover:text-rose-600 transition-colors"
                onClick={() => navigate("/about")}
              >
                About
              </span>
              <span
                className="cursor-pointer text-sm hover:text-rose-600 transition-colors"
                onClick={() => navigate("/contact")}
              >
                Contact
              </span>
            </nav>
          </div>
          {/* Request Demo Button */}
          <Button className="bg-black text-white border border-white hover:bg-rose-600">
            Request Demo
          </Button>
        </motion.header>

        {/* Main Content */}
        <main className="mt-12 grid md:grid-cols-2 gap-8 items-center pb-10 md:py-28">
          {/* Left Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <div className="text-sm text-rose-600 tracking-wider">ARTICLE</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              IMPLEMENTING RPA WITH CLARITY & CONFIDENCE
            </h1>
            <p className="text-gray-400">
              SurfaceAI uses various AI/ML techniques to capture and analyze
              in-depth details of the underlying process.
            </p>
            <button
              className="flex items-center justify-center bg-white text-gray-700 font-medium text-sm rounded-3xl px-4 py-2 h-10 shadow-md transition-all duration-300 ease-in-out hover:bg-red-50 hover:text-red-700 active:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
              role="button"
            >
              Know More
            </button>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-8">
              <span className="cursor-pointer text-sm hover:text-rose-600">
                Fb
              </span>
              <span className="cursor-pointer text-sm hover:text-rose-600">
                Tw
              </span>
              <span className="cursor-pointer text-sm hover:text-rose-600">
                Ig
              </span>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="relative mt-[-63%] ml-20 md:mt-[0%] md:ml-0"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-rose-600 opacity-20 blur-3xl"></div>
            {/* Image */}
            <img
              src="https://i.imgur.com/581MyGL.png"
              alt="Professional with phone"
              className="relative z-10 w-full max-w-md mx-auto bg-transparent"
            />
            {/* Slider Buttons */}
            {/* Add any slider controls here */}
          </motion.div>
        </main>
      </div>

      {/* Decorative elements */}
    </div>
  );
}
