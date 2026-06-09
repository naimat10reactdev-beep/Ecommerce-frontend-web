import React, { useState } from 'react';
import { FaSearch, FaShoppingBag, FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cart, removeFromCart }) => {

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <nav className="bg-orange-200 px-4 sm:px-10 md:px-40 py-3">

        <div className="flex justify-between items-center">

       
          <h1 className="text-2xl font-bold flex items-center gap-2 text-yellow-600">
            <FaShoppingBag />
            shopify
          </h1>

       
          <div className="flex items-center gap-5">

          
            <div className="flex items-center bg-white px-3 py-2 rounded-full">
              <FaSearch className="text-gray-400" />
              <input className="ml-2 outline-none" placeholder="Search" />
            </div>

         
            <div
              onClick={() => setOpen(!open)}
              className="relative bg-amber-500 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer"
            >
              <FaShoppingCart className="text-white text-xl" />

            
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                {cart.length}
              </span>
            </div>

          </div>
        </div>
      </nav>

  
      {open && (
        <div className="absolute right-10 top-20 w-80 bg-white shadow-lg rounded-lg p-4 z-50">

          <h2 className="font-bold mb-3">Your Cart</h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            cart.map((item) => (
               
              <div key={item.id} className="flex items-center justify-between mb-3">
                
                <div className="flex items-center gap-2">
                  <img src={item.img} className="h-10 w-10 rounded" />
                  <p className="text-sm">{item.title}</p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm"
                >
                  Delete
                </button>

              </div>
            ))
          )}
        
        </div>
        
      )}

    </div>
  );
};

export default Navbar;