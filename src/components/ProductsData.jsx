import React from 'react';
import { Star } from 'lucide-react';


 import photo2 from "../components/images/photo2.png";
 import shop2 from "../components/images/shop2.jpeg";
 import shoping1 from "../components/images/shoping1.jpeg";
 import shop3 from "../components/images/shop3.jpeg";


const ProductsData = [
  {
    id: 1,
    img: photo2, 
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
  },
  {
    id: 2,
    img:shoping1,
    title: "Women western",
    rating: 4.5,
    color: "Red",
  },
  {
    id: 3,
    img: shop2,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
  },
  {
    id: 4,
    img: shop3,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
  },
  {
    id: 5,
    img: shoping1,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
  },
];

const TopProducts = () => {
  return (
    <div className="bg-white py-12 px-4 font-sans sm:px-20 lg:px-40">
      <div className="container mx-auto px-4">
 
        <div className="text-center mb-10 space-y-2">
          <p className="text-sm text-orange-400 font-medium">
            Top Selling Products for you
          </p>
          <h1 className="text-3xl font-bold text-gray-800">
            Top Selling Products
          </h1>
          <p className="text-xs text-gray-400 max-w-md mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis delectus architecto error nesciunt.
          </p>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
          {ProductsData.map((product) => (
            <div key={product.id} className="group">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-[250px] w-[180px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-3 text-left">
                <h3 className="font-bold text-gray-900">{product.title}</h3>
                <p className="text-sm text-gray-500">{product.color}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-semibold">{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

       
        <div className="flex justify-center mt-10">
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-10 rounded-md shadow-md transition-all">
            View All Products
          </button>
        </div>

      </div>
    </div>
  );
};

export default TopProducts;