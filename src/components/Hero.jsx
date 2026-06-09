import React from "react";
import photo2 from "../components/images/photo2.png";
import photo5 from "../components/images/photo5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Hero = () => {
  const imagelist = [
    {
      id: 1,
      title: "Upto 50% off on all Men's Wear",
      img: photo2,
      dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Upto 20% off on all Women's Wear",
      img: photo5,
      dec: "Limited time offer! Grab your favorite items now.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gray-100 min-h-[550px] sm:min-h-[650px] flex items-center justify-center">

      <div className="absolute h-[700px] w-[700px] px-3.5 bg-orange-200 -top-1/2 right-0 rotate-45 rounded-3xl z-9"> </div>

   
      <div className="container mx-auto z-10 sm:px-0 py-0">

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
        >

          {imagelist.map((data) => (

            <SwiperSlide key={data.id}>

              <div className="grid grid-cols-1 sm:grid-cols-2 items-center min-h-[650px]">

                
                <div className="flex flex-col justify-center gap-5 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 pl-10 sm:pl-10 lg:pl-40">

                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                    {data.title}
                  </h1>

                  <p className="text-sm text-gray-600 max-w-[500px]">
                    {data.dec}
                  </p>

                  <div>
                    <button className="bg-orange-400 hover:bg-orange-500 duration-300 text-white py-3 px-6 rounded-full font-semibold">
                      Order Now
                    </button>
                  </div>

                </div>

              
                <div className="order-1 sm:order-2 flex justify-end relative lg: pr-40 py-4">

                  <img
                    src={data.img}
                    alt="shopping"
                    className="w-[380px] sm:w-[420px] lg:w-[360px] py-4 object-contain"
                  />

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </div>
  );
};

export default Hero;