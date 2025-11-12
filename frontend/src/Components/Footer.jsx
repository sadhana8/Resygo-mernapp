import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12 px-6">
      {/* Newsletter Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">
          Get Latest Updates on <span className="text-amber-500">All Offers</span>
        </h2>
        <p className="text-gray-400 mb-6">
          Subscribe to our newsletter to get frequent updates and exclusive deals.
        </p>
        <div className="flex justify-center items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-72 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300">
            Join Now
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
        {/* Logo & Social Links */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">ResyGo</h2>
          <div className="flex justify-center md:justify-start gap-4 text-2xl text-amber-500">
            <FaFacebook className="hover:text-amber-400 cursor-pointer transition-colors" />
            <FaInstagram className="hover:text-amber-400 cursor-pointer transition-colors" />
            <FaYoutube className="hover:text-amber-400 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-gray-400 font-medium">
          <li className="hover:text-amber-400 cursor-pointer transition-colors">Home</li>
          <li className="hover:text-amber-400 cursor-pointer transition-colors">About</li>
          <li className="hover:text-amber-400 cursor-pointer transition-colors">Menu</li>
          <li className="hover:text-amber-400 cursor-pointer transition-colors">Privacy</li>
        </ul>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ResyGo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
