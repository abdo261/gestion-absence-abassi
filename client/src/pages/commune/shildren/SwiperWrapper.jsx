import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function SwiperWrapper() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#eee",
          "--swiper-pagination-color": "#eee",
          cursor: "grab",
        }}
        speed={600}
        parallax={true}
        navigation={true}
        modules={[Parallax, Navigation]}
        className="mySwiper bg-secondary text-light px-5 rounded"
      >
        <SwiperSlide>
          <div className="title h4" data-swiper-parallax="-400">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-300">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title h4" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title h4" data-swiper-parallax="-300">
            Slide 3
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
