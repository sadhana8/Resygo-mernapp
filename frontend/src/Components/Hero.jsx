import React from 'react';
import bgImage from '../assets/hero.jpg';
import line from '../assets/line2.png';
import Navbar from '../Components/Navbar';

const Hero = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Navbar */}
      <Navbar />

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <img
          src={line}
          alt="Decorative line"
          className="w-32 md:w-48 opacity-90 mb-4 animate-pulse"
        />

        <h2 className="text-sm md:text-lg mb-3 tracking-[0.3em] uppercase text-amber-300 font-medium">
          Where ResyGo Meets Taste
        </h2>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
          ResyGo
        </h1>

        <button className="bg-amber-500 text-black py-3 px-10 rounded-full font-semibold tracking-wide hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-lg">
          BOOK A TABLE
        </button>
      </div>

      {/* Soft gradient fade at bottom for a smooth finish */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/80 to-transparent" />
    </div>
  );
};

export default Hero;
