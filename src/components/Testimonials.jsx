import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import shirts4 from '../components/images/shirts4.jpeg';
import shirts1 from '../components/images/shirts1.jpeg';
import shirts2 from '../components/images/shirts2.jpeg';
import shirts5 from '../components/images/shirts5.jpeg';

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {

  const data = [
    {
      id: 1,
      name: "Ali",
      text: "Very good website design",
      img: shirts4,
    },
    {
      id: 2,
      name: "Ahmed",
      text: "Amazing products",
      img:shirts2,
    },
    {
      id: 3,
      name: "Usman",
      text: "Best service",
      img:shirts2,
    },
    {
      id: 4,
      name: "Naimat",
      text: "Fast delivery",
      img:shirts5,
    },
    {
      id: 5,
      name: "Bilal",
      text: "Awesome UI",
      img:shirts2,
    },
  ];

  return (
    <div className="py-10 px-40">

      <h1 className="text-3xl font-bold text-center mb-10">
        Testimonials
      </h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            
            <div className=" rounded-4xl  text-center py-6 px-8 h-[240px]  bg-amber-100 ">
            
            <div className="w-16 h-16  rounded-full mx-auto mb-4">
              <img src={item.img} className=" rounded-full" />
            </div>
            

              <h2 className="text-xl font-bold">
                {item.name}
              </h2>

              <p className="text-gray-500 mt-3">
                {item.text}
              </p>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default Testimonials;