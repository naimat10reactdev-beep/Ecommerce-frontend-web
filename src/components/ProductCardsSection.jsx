import React from "react";

import shirts5 from "../components/images/shirts5.jpeg";
import shirts2 from "../components/images/shirts2.jpeg";
import shorts3 from "../components/images/shorts3.jpeg";

const ProductCardsSection = ({ addToCart }) => {

  const products = [
    {
      id: 1,
      title: "Casual Wear",
      img: shirts5,
    },
    {
      id: 2,
      title: "Printed shirt",
      img: shirts2,
    },
    {
      id: 3,
      title: "Women shirt",
      img: shorts3,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-10">

      <div className="max-w-6xl mx-auto mb-16">

        <p className="text-yellow-500 font-semibold text-sm">
          Trending Products
        </p>

        <h2 className="text-3xl font-bold text-gray-800">
          Top Rated Products
        </h2>

        <p className="text-gray-400 text-sm max-w-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis delectus architecto error nesciunt.
        </p>

      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {products.map((item) => (

          <div
            key={item.id}
            className="group relative bg-white border border-gray-100 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-gray-800 mt-16"
          >

            {/* IMAGE */}
            <div className="relative -mt-24 mb-4 transition-transform duration-300 group-hover:scale-110">

              <img
                src={item.img}
                alt={item.title}
                className="h-44 w-auto object-contain drop-shadow-xl"
              />

            </div>

            {/* STARS */}
            <div className="flex gap-1 mb-2">

              {[...Array(4)].map((_, i) => (
                <span
                  key={i}
                  className="text-yellow-400 text-xl"
                >
                  ★
                </span>
              ))}

            </div>

            {/* TITLE */}
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-xs mt-2 mb-6 group-hover:text-gray-300 transition-colors duration-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => addToCart(item)}
              className="bg-orange-400 text-white py-2 px-6 rounded-full font-medium transition-all duration-300 hover:scale-105 group-hover:bg-white group-hover:text-orange-400"
            >
              Order Now
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardsSection;