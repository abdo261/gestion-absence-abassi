
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Navigation } from "swiper/modules";

export default function SwiperWrapper({etablissements,detailsItemId}) {
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
        className="mySwiper 
         text-light px-5 rounded"
      >
        {etablissements && etablissements.filter(e=>e.commune===detailsItemId).length ? (
          etablissements.filter(e=>e.commune===detailsItemId).map(e=>(
             <SwiperSlide>
          <div className="title h4 text-with-shadow" data-swiper-parallax="-400">
            {e.nom}
          </div>
          <div className="subtitle text-with-shadow d-flex justify-content-between align-items-center" data-swiper-parallax="-300">
          <span>{ e.secteur}</span> 
          
          </div>
          <div className="text text-with-shadow" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            </p>
          </div>
        </SwiperSlide>
          ))
       
       ):( <SwiperSlide>
        <div className="title  text-with-shadow d-flex align-items-center justify-content-center" data-swiper-parallax="-400">
        No Etablissement 
        </div>
       
      </SwiperSlide>)}
      </Swiper>
    </>
  );
}
