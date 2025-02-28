import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./App.css";
import img1 from "./assets/puppy1.png";
import img2 from "./assets/puppy2.png";
import img3 from "./assets/puppy3.png";

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Cute Puppies</h1>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="swiper-container"
      >
        <SwiperSlide>
          <img src={img1} alt="Cute puppy 1" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Cute puppy 2" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Cute puppy 3" className="slide-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
