import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-black/40 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4 text-white">
        {/* Logo */}
        <h2 className="font-extrabold text-2xl tracking-wide text-amber-400 cursor-pointer hover:text-amber-300 transition-colors">
          ResyGo
        </h2>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {['Home', 'Reservation', 'Menu', 'Contact'].map((item) => (
            <li
              key={item}
              className="font-semibold text-lg cursor-pointer hover:text-amber-400 transition-colors duration-300 relative group"
            >
              {item}
              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon (optional placeholder) */}
        <div className="md:hidden cursor-pointer">
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
