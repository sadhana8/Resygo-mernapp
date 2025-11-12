import React from 'react'
import img1 from '../assets/break.jpg'
import img2 from '../assets/app.jpg'
import img3 from '../assets/serv3.jpg'
import line from '../assets/line.png'

const Service = () => {
  return (
    <div className="bg-linear-to-b from-black via-gray-900 to-black text-white py-20 px-8">
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 max-w-7xl mx-auto">
        
        {/* Breakfast */}
        <div className="bg-gray-800/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-2 transition-all duration-500 w-full md:w-1/3">
          <div className="p-10 flex flex-col items-center">
            <img src={line} alt="" className="w-28 mb-3" />
            <h2 className="text-amber-400 text-3xl font-bold tracking-wide">Breakfast</h2>
            <p className="text-center mt-4 text-gray-300 leading-relaxed">
              Start your day with a delicious and energizing breakfast made to delight your taste buds.
            </p>
          </div>
          <img src={img1} alt="Breakfast" className="h-64 w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>

        {/* Drinks */}
        <div className="bg-gray-800/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-2 transition-all duration-500 w-full md:w-1/3">
          <img src={img3} alt="Drinks" className="h-64 w-full object-cover hover:scale-105 transition-transform duration-500" />
          <div className="p-10 flex flex-col items-center">
            <img src={line} alt="" className="w-28 mb-3" />
            <h2 className="text-amber-400 text-3xl font-bold tracking-wide">Drinks</h2>
            <p className="text-center mt-4 text-gray-300 leading-relaxed">
              Refresh yourself with a wide variety of exotic and classic beverages, crafted to perfection.
            </p>
          </div>
        </div>

        {/* Appetizers */}
        <div className="bg-gray-800/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-2 transition-all duration-500 w-full md:w-1/3">
          <div className="p-10 flex flex-col items-center">
            <img src={line} alt="" className="w-28 mb-3" />
            <h2 className="text-amber-400 text-3xl font-bold tracking-wide">Appetizers</h2>
            <p className="text-center mt-4 text-gray-300 leading-relaxed">
              Begin your meal with irresistible appetizers that set the perfect tone for the main course.
            </p>
          </div>
          <img src={img2} alt="Appetizers" className="h-64 w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>

      </div>
    </div>
  )
}

export default Service
