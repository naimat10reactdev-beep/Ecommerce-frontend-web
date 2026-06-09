import React, { useState } from "react";

const Navbar2 = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [opennavbar, setNavbar] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setOpenDropdown(false);
  };

  return (
    <div className="bg-white py-4 px-4">

     
      <div className="flex justify-between items-center md:hidden">
      
        <button onClick={() => setNavbar(!opennavbar)}>
          ☰
        </button>
      </div>

 
      <ul
        className={`${
          opennavbar ? "flex" : "hidden"
        } md:flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-gray-600 mt-4 md:mt-0`}
      >

        {["Home", "Top ruted", "Kids Wear", "Men Wear", "Electronics"].map(
          (item, index) => (
            <li key={index} className="cursor-pointer text-[18px]">
              {item}
            </li>
          )
        )}

        <li
          className="relative cursor-pointer text-[18px]"
          onClick={toggleDropdown}
        >
          Tradings Mems

          {openDropdown && (
            <ul className="md:absolute md:top-8 left-0 bg-white shadow-md p-3 rounded w-40 z-50 mt-2">
              <li
                className="py-1 hover:bg-gray-100 cursor-pointer"
                onClick={closeDropdown}
              >
                Team
              </li>

              <li
                className="py-1 hover:bg-gray-100 cursor-pointer"
                onClick={closeDropdown}
              >
                Work
              </li>
            </ul>
          )}
        </li>

      </ul>
    </div>
  );
};

export default Navbar2;