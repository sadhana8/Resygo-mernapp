import React, { useContext,useState } from 'react';
import { MenuContext } from '../Context/MenuContext';
import { categoryItem } from '../assets/assets';

const MenuDisplay = () => {
  const { products } = useContext(MenuContext);
  const [category, setCategory] = useState('All');

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400 drop-shadow-lg tracking-wide">
          Discover Our Menu
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Explore a variety of dishes crafted with passion and flavor.
        </p>
      </div>

      {/* Category selection */}
      <div className="flex flex-wrap justify-center gap-6 border-y border-gray-700 py-6 mb-12">
        {categoryItem.map((item, index) => (
          <li
            key={index}
            onClick={()=> setCategory((prev) => prev === item.category_title ? "All" : item.category_title)}
            className={`cursor-pointer px-10 py-3 list-none rounded-full font-medium text-sm transition-all duration-200 ${ category === item.category_title ? "bg-amber-500 border-2 border-gray-600" : " border-2 border-gary-600"}`}
          >
            {item.category_title}
          </li>
        ))}
      </div>

      {/* Menu list */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {products.length > 0 ? (
          products.filter((product) => category === "All" || category === product.category).map((product, index) => (
            <div
              key={product._id}
              className={`flex items-start gap-6 pb-6 border-b border-gray-700 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}
            >
              {/* Dish Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-full shadow-lg border-2 border-amber-500"
              />

              {/* Dish Info */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">
                    {product.name}
                  </h3>
                  <span className="text-lg font-semibold text-amber-400 ml-4">
                    ${product.price}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                  {product.description || 'A delightful dish made with fresh ingredients and rich flavors.'}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-2 text-center text-gray-500 italic">
            Nothing in the menu yet 🍽️
          </p>
        )}
      </div>
    </section>
  );
};

export default MenuDisplay;
