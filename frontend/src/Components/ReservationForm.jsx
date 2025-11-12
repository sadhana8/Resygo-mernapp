import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

const ReservationForm = () => {
  const timeSlot = () => {
    const slots = [];
    for (let hour = 9; hour < 21; hour++) {
      const startHour = hour % 12 === 0 ? 12 : hour % 12;
      const startPeriod = hour < 12 ? "AM" : "PM";
      const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12;
      const endPeriod = hour + 1 < 12 ? "AM" : "PM";
      slots.push(`${startHour}:00 ${startPeriod} - ${endHour}:00 ${endPeriod}`);
    }
    return slots;
  };

  return (
    <section className="bg-linear-to-b from-black via-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-gray-900/60 backdrop-blur-md border border-gray-700 shadow-2xl rounded-2xl p-10">
        {/* Reservation Form */}
        <form className="space-y-6">
          <h2 className="text-sm uppercase tracking-widest text-amber-400 font-semibold">
            Online Reservation
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold">
            Dine With Us —{" "}
            <span className="text-amber-400">Book a Table</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-400 mb-1 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-400 mb-1 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-400 mb-1 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-gray-400 mb-1 font-medium">
                Reservation Date
              </label>
              <input
                type="date"
                className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-gray-400 mb-1 font-medium">
                Time of Reservation
              </label>
              <select className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                <option value="" className="text-gray-800">
                  Select Time
                </option>
                {timeSlot().map((slot, index) => (
                  <option key={index} className="text-gray-800">
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-gray-400 mb-1 font-medium">
                Number of Guests
              </label>
              <select className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                {[...Array(10).keys()].map((i) => (
                  <option key={i} className="text-gray-800">
                    {i + 1} Guest(s)
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-amber-500 text-black font-semibold py-3 rounded-full hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Book a Table
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-8 md:pl-8 flex flex-col justify-center">
          <div>
            <h3 className="text-xl font-semibold text-amber-400 mb-1">
              Address
            </h3>
            <p className="text-gray-400">
              123, Abc Street, N-axis, Sample City, State Country
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-amber-400 mb-1">
              Call Us
            </h3>
            <p className="text-gray-400">+977-9000000000</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-amber-400 mb-1">
              Open Hours
            </h3>
            <p className="text-gray-400">Mon - Fri: 11:00 AM - 10:00 PM</p>
            <p className="text-gray-400">Sat - Sun: 09:00 AM - 11:00 PM</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-amber-400 mb-1">
              Stay Connected
            </h3>
            <div className="flex gap-5 mt-2 text-2xl">
              <FaFacebook className="hover:text-amber-400 cursor-pointer transition-colors" />
              <FaInstagram className="hover:text-amber-400 cursor-pointer transition-colors" />
              <FaYoutube className="hover:text-amber-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
